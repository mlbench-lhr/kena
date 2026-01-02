// components/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import { JoinWaitlistModal } from "../JoinWaitlistModal";

export default function HeroSection() {
  return (
    <section className="relative w-full h-fit lg:h-[700px] flex flex-col items-center text-center bg-white overflow-hidden">
      <Image
        src="/images/landing/heroSection/blue-line.svg"
        alt=""
        width={1600}
        height={600}
        className="absolute bottom-0 translate-y-1/6 left-1/2 -translate-x-1/2 w-full max-w-none opacity-50 pointer-events-none"
        priority
      />{" "}
      <div className="relative w-full [@media(min-width:1460px)]:w-365 py-10 md:py-0 h-150 lg:h-[700px]  flex  px-4 sm:px-6 lg:px-8 flex-col items-center text-center bg-transparent overflow-hidden">
        <div className="absolute top-2 left-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="913"
            height="903"
            viewBox="0 0 913 903"
            fill="none"
          >
            <g filter="url(#filter0_f_193_823)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M287.091 114.179C354.722 107.782 437.46 79.9507 486.852 112.488C537.819 146.063 498.227 205.92 500.164 254.542C501.453 286.916 527.878 325.35 496.283 349.285C462.995 374.502 387.636 340.827 353.606 365.568C304.752 401.086 354.368 485.836 287.091 501.372C230.087 514.535 200.101 444.712 177.88 406.147C163.029 380.371 207.189 348.504 185.546 325.132C149.385 286.083 43.5918 289.263 27.9044 244.196C14.3034 205.122 76.4062 170.475 123.49 146.856C170.571 123.238 229.436 119.632 287.091 114.179Z"
                fill="#FFF8E9"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_193_823"
                x="-374"
                y="-303"
                width="1287"
                height="1206"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_193_823"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-5 left-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1287"
            height="1124"
            viewBox="0 0 1287 1124"
            fill="none"
          >
            <g filter="url(#filter0_f_193_822)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M661.091 335.179C728.722 328.782 811.46 300.951 860.852 333.488C911.819 367.063 872.227 426.92 874.164 475.542C875.453 507.916 901.878 546.35 870.283 570.285C836.995 595.502 761.636 561.827 727.606 586.568C678.752 622.086 728.368 706.836 661.091 722.372C604.087 735.535 574.101 665.712 551.88 627.147C537.029 601.371 581.189 569.504 559.546 546.132C523.385 507.083 417.592 510.263 401.904 465.196C388.303 426.122 450.406 391.475 497.49 367.856C544.571 344.238 603.436 340.632 661.091 335.179Z"
                fill="#F8E1FD"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_193_822"
                x="0"
                y="-82"
                width="1287"
                height="1206"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_193_822"
                />
              </filter>
            </defs>
          </svg>
        </div>
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl md:pt-30 mx-auto">
          <h1 className="text-xl sm:text-[26px] md:text-[36px] lg:text-[46px] font-bold leading-tight gradient-block">
            {"Riding life's emotional waves?"}
            <br />
            Seek clarity with kena.
          </h1>

          <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            {
              "Life's changes can stir up strong and sometimes unfamiliar emotions. We are developing an app Kena that offer a three-step journey to clarity and control: Capture, Aspire, and Unlock Growth."
            }
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        {/* Blue Wave Line */}

        {/* Happy Emoji - Top Right */}
        <Image
          src="/images/landing/heroSection/emoji-happy.svg"
          alt=""
          width={160}
          height={160}
          className="absolute right-[8%] top-[80%] sm:top-[70%] lg:top-[35%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 block"
        />

        {/* Confused Emoji - Bottom Left */}
        <Image
          src="/images/landing/heroSection/emoji-confused.png"
          alt=""
          width={160}
          height={160}
          className="absolute left-[15%] sm:left-[20%] lg:left-[25%] top-[65%] sm:top-[65%] lg:top-[62%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 block"
        />

        {/* Heart 1 - Top Right */}
        <Image
          src="/images/landing/heroSection/heart-1.png"
          alt=""
          width={60}
          height={60}
          className="absolute right-[12%] sm:right-[20%] lg:right-[28%] top-[70%] sm:top-[65%] lg:top-[58%] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-80 block"
        />

        {/* Heart 2 - Bottom Left */}
        <Image
          src="/images/landing/heroSection/heart-2.png"
          alt=""
          width={60}
          height={60}
          className="absolute left-[8%] sm:left-[10%] lg:left-[12%] top-[75%] sm:top-[73%] lg:top-[72%] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 opacity-80 block"
        />
        <svg
          className="absolute right-[40%] sm:right-[40%] lg:right-[5%] top-[60%] sm:top-[55%] lg:top-[28%] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-80 block"
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="35"
          viewBox="0 0 37 35"
          fill="none"
        >
          <path
            d="M31.3643 34.6416L35.9804 10.3866C36.8851 5.64101 33.768 1.06086 29.0225 0.156205C24.2769 -0.748449 19.6968 2.36873 18.7921 7.11429L17.448 14.1809L10.3866 12.8369C5.64101 11.9322 1.06086 15.0494 0.156203 19.795C-0.74845 24.5405 2.36877 29.1206 7.11432 30.0253L31.3643 34.6416Z"
            fill="#FFDACF"
          />
        </svg>
      </div>
    </section>
  );
}
