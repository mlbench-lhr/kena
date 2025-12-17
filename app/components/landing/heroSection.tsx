// components/Hero.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-20 bg-[#FFF8F0] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-[26px] md:text-[36px] lg:text-[46px] font-bold leading-tight gradient-block">
          Riding life's emotional waves?
          <br />
          Seek clarity with kena.
        </h1>

        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-4">
          Life's changes can stir up strong and sometimes unfamiliar emotions.
          Kena—your guide from a founder who's been there—offers a three-step
          journey to clarity and control: Capture, Aspire, and Unlock Growth.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#2F5E4F] hover:bg-[#264A3E] text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-md">
            Join the Waitlist
          </button>

          <button className="w-full sm:w-auto bg-[#D4A574] hover:bg-[#C49563] text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-md">
            Take the Quick Survey
          </button>
        </div>
      </div>

      {/* Blue Wave Line */}
      <Image
        src="/images/landing/heroSection/blue-line.svg"
        alt=""
        width={1600}
        height={600}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-none opacity-50 pointer-events-none"
        priority
      />

      {/* Happy Emoji - Top Right */}
      <Image
        src="/images/landing/heroSection/emoji-happy.png"
        alt=""
        width={160}
        height={160}
        className="absolute right-[8%] top-[38%] sm:top-[42%] lg:top-[35%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 hidden sm:block"
      />

      {/* Confused Emoji - Bottom Left */}
      <Image
        src="/images/landing/heroSection/emoji-confused.png"
        alt=""
        width={160}
        height={160}
        className="absolute left-[15%] sm:left-[20%] lg:left-[25%] top-[68%] sm:top-[65%] lg:top-[62%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 hidden sm:block"
      />

      {/* Heart 1 - Top Right */}
      <Image
        src="/images/landing/heroSection/heart-1.png"
        alt=""
        width={60}
        height={60}
        className="absolute right-[12%] sm:right-[15%] lg:right-[18%] top-[28%] sm:top-[30%] lg:top-[28%] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-80 hidden md:block"
      />

      {/* Heart 2 - Bottom Left */}
      <Image
        src="/images/landing/heroSection/heart-2.png"
        alt=""
        width={60}
        height={60}
        className="absolute left-[8%] sm:left-[10%] lg:left-[12%] top-[75%] sm:top-[73%] lg:top-[72%] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 opacity-80 hidden md:block"
      />
    </section>
  );
}
