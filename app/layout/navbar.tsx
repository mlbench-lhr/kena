// components/navbar.tsx

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#2F563C] px-26 py-4 flex items-center justify-center">
      <div className="w-full [@media(min-width:1400px)]:w-365 bg-[#2F563C] flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <span className="text-white text-xl font-serif">Kena</span>
        </div>

        <div className="flex items-center gap-10 left-1/2 absolute -translate-x-1/2">
          <a className="text-white text-sm tracking-wide" href="#">
            Home
          </a>
          <a className="text-white text-sm tracking-wide" href="#">
            About Us
          </a>
          <a className="text-white text-sm tracking-wide" href="#">
            Why Kena
          </a>
        </div>

        <button className="bg-[#D7A95F] text-white text-sm px-5 py-2 rounded">
          Download Now
        </button>
      </div>
    </nav>
  );
}
