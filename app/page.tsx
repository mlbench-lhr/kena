import Image from "next/image";
import HeroSection from "@/app/components/landing/heroSection";
import Section2 from "./components/landing/Section2";
import Section3 from "./components/landing/Section3";
import Section4 from "./components/landing/Section4";

export default function Home() {
  console.log("test push");
  return (
    <div className="w-full mx-auto">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
