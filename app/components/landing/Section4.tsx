// components/Hero.tsx

import Image from "next/image";
import Link from "next/link";

export default function Section4() {
  return (
    <section className="relative w-full h-fit flex flex-col items-center text-center py-15 bg-[#FFFCF6] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl  mx-auto">
        <h1 className="text-xl md:text-[30px] font-extrabold leading-tight gradient-block">
          So who came up with kena?
        </h1>
        <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-[20px] leading-relaxed px-4">
          A personal journey intended to spark a movement of clarity.{" "}
        </p>
      </div>
      <div className="flex justify-between items-center  w-full [@media(min-width:1460px)]:w-365 ps-4 pe-4 sm:ps-10 sm:pe-10 md:ps-17.5 mt-10 md:mt-6 xl:mt-0 ">
        <div className="flex flex-col justify-start w-full md:w-[60%] lg:w-[50%] xl:w-169 gap-2 items-start ">
          <h3 className="md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal text-start text-black/50 w-full">
            Hi, I’m Loise, the dreamer behind kena. In 2021, I moved to a new
            country, full of hope for an exciting adventure. Instead, I found
            myself navigating unfamiliar cultural differences and long work
            hours in a place far from home, where I knew no one. By 2023, my
            spark was dimming - help was seriously needed so I opted for therapy
            as a sounding board and started listening to podcasts on wellness.
            These two introduced me to key tools like the wheel of feelings,
            emotional forecasting, journaling - sketches, scribbled notes and
            coloring helped me visualise my emotions and taught me to see them
            as guides. My journey from chaos to clarity, lit the spark for kena:
            an app to help you and I visualize and take the journey from where
            you are to where you want to be. It’s just an idea, and I’d love
            your perspective to bring it to life. C’mon join me—take our quick
            survey to share your insights, join the waitlist, and let’s shape
            kena together for your emotional clarity!
          </h3>

          <div className="w-full mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cursor-pointer w-full sm:w-auto bg-[#2F5E4F] hover:bg-[#264A3E] text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-md">
              Join the Waitlist
            </button>

            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSegOjtXbctriyzBrNf_gzPjoOxHCiW8Yb9kz7QeN97prjMH2w/viewform"
              }
              target="_blank"
              className="w-full sm:w-auto bg-[#F0B964] hover:bg-[#C49563] text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-md"
            >
              Take the Quick Survey
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-[40%] lg:w-[50%] xl:w-150">
          <Image
            src={"/bubbles.png"}
            alt=""
            width={600}
            height={600}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
