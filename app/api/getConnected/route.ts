// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import UserSubscription from "@/app/lib/mongodb/models/UserSubscription";

const MONGO_URI = process.env.MONGODB_URI as string;

const SMTP_HOST = process.env.SMTP_HOST as string;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER as string;
const SMTP_PASS = process.env.SMTP_PASS as string;
const EMAIL_FROM = process.env.EMAIL_FROM;

async function connectToDatabase(): Promise<void> {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGO_URI);
}

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && email.includes("@");
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465, false for others
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

async function sendMail(to: string, subject: string, html: string) {
  const resp = await transporter.sendMail({
    from: EMAIL_FROM,
    to,
    subject,
    html,
  });
  console.log("resp-------", resp);

  return resp;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const email = body?.email;

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!MONGO_URI || !SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );
    }

    await connectToDatabase();

    const existing = await UserSubscription.findOne({ email }).lean();
    if (existing) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 409 }
      );
    }

    const newSub = new UserSubscription({ email });
    await newSub.save();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 40px;">
        <h1 style="color: #000;">Makena</h1>  
        <h2 style="color: #000;">Welcome to <span style="color: #f0b964;">Makena</span>!</h2>
        <p>Dear Traveler,</p>
        <p>
          We’re excited to have you. Kena helps you navigate big emotions and find clarity through our simple journey: Capture, Aspire, and Unlock Growth.
        </p>
        <p>
          Join the waitlist and take our quick survey to help shape Kena.
        </p>
        <hr />
        <p style="font-size: 12px;">
          <a href="https://makena-landing.vercel.app">makena-landing.vercel.app</a>
        </p>
      </div>
    `;

    await sendMail(email, "Welcome to Makena!", htmlContent);

    return NextResponse.json({
      success: true,
      message: "Subscription successful",
    });
  } catch (err) {
    console.error("Subscription error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
