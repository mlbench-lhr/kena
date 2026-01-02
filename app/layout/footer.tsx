// components/footer.tsx
import { Hourglass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2F563C] text-white py-10 md:py-20">
      <div className="flex justify-between flex-col md:flex-row gap-y-6 w-full px-4 md:px-10 [@media(min-width:1460px)]:px-26 [@media(min-width:1460px)]:w-365 mx-auto">
        <div className="max-w-sm">
          <h2 className="text-3xl font-serif mb-4">Kena</h2>

          <p className="text-sm leading-relaxed mb-6">
            See your emotions clearly.
            <br />
            Grow with intention.
          </p>

          <button
            disabled
            className="cursor-pointer flex! justify-center items-center gap-2 w-fit hidden lg:block bg-[#F0B964] text-white text-[14px] px-6 py-2 rounded-lg hover:bg-[#e5a84d] transition-colors z-20"
          >
            <span className="">In Development</span>
            <Hourglass size={12} />
          </button>
        </div>

        <div className="pe-0 md:pe-10 lg:pe-50">
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#founderStory" className="">
                Founder’s Story
              </a>
            </li>
            <li>
              <a href="#howMakenaWorks" className="">
                How Makena Works
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-white/30 mt-16 pt-6 text-center text-sm">
        © 2025 Makena. All rights reserved.
      </div>
    </footer>
  );
}
