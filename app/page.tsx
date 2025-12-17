import Image from "next/image";
import HeroSection from "@/app/components/landing/heroSection";

export default function Home() {
  console.log("test push");
  return (
    <>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
