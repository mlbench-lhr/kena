import mongoose from "mongoose";

const UserSubscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model re-compilation in Next.js
const UserSubscription =
  mongoose.models.UserSubscription ||
  mongoose.model("UserSubscription", UserSubscriptionSchema);

export default UserSubscription;
