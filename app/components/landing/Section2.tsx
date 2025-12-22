// components/Hero.tsx

import Image from "next/image";
import mobile from "@/public/Group 1000013057 (1).png";
import Link from "next/link";
import { JoinWaitlistModal } from "../JoinWaitlistModal";

export default function Section2() {
  return (
    <section
      id="whyKena"
      className="relative w-full h-fit md:min-h-310 flex flex-col items-center text-center bg-[#FFFCF6] overflow-hidden"
    >
      <div className="relative w-full [@media(min-width:1460px)]:w-365 h-fit md:min-h-310 py-20">
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-xl md:text-[30px] font-extrabold leading-tight gradient-block">
            WHY KENA EXISTS
          </h1>
          <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-[20px] leading-relaxed px-4">
            Big Emotions Don’t Have to Feel Overwhelming
          </p>
        </div>
        <div className="flex justify-between items-center w-full flex-col-reverse gap-y-6 xl:flex-row [@media(min-width:1460px)]:w-365 ps-0 xl:ps-17.5">
          <div className="flex px-4 sm:px-10  flex-col justify-start gap-2 items-start w-full md:w-[80%] xl:w-130">
            <h3 className="text-[14px] md:text-[17px] lg:text-[19px] font-normal text-start text-black/50">
              {
                "Life changes—like loss, marriage, relocation, divorce, or adolescence—can change your emotional landscape and leave you feeling out of touch with yourself."
              }
              <br />
              {
                " Untended, they may shift behaviors, challenge relationships, or cloud your perspective. We've been there too, and you deserve emotional clarity and ease."
              }
            </h3>
            <h4 className="text-[16px] md:text-[20px] lg:text-[25px] font-bold text-[#20573B] text-start">
              Kena is your guide, crafted by a founder who's navigated these
              waves and working with wellness experts' support to curate
              something professional.
            </h4>
            <div className=" w-full mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-start items-center">
              <JoinWaitlistModal />
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
          <div className="">
            <Image
              src={mobile.src}
              alt=""
              width={600}
              height={600}
              className="w-auto xl:w-170 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="663"
          height="330"
          viewBox="0 0 663 330"
          fill="none"
        >
          <path
            d="M660.124 329.748L662.013 329.556C661.952 329.167 655.437 290.295 615.41 251.018C548.542 185.402 441.183 168.965 362.891 166.73C87.3726 158.869 18.4282 58.8944 1.8526 0L-6.10352e-05 0.339714C16.6948 59.664 86.0325 160.365 362.822 168.265C440.688 170.486 547.448 186.804 613.872 251.924C653.592 290.864 660.066 329.363 660.124 329.748Z"
            fill="#20573B"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1197"
          height="405"
          viewBox="0 0 1197 405"
          fill="none"
        >
          <path
            opacity="0.46"
            d="M0 0.764313C0 0.764313 241.29 -21.2454 321.39 170.949C401.49 363.142 587.69 390.5 803.13 315.264C1018.57 240.028 1196.97 308.429 1196.97 404.807H0V0.764313Z"
            fill="#F2BF64"
            fill-opacity="0.32"
          />
        </svg>
      </div>{" "}
    </section>
  );
}
