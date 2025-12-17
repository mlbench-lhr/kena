// components/navbar.tsx

import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full bg-[#2F563C] px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-white text-xl font-serif">Kena</span>
            </div>

            <div className="flex items-center gap-10">
                <a className="text-white text-sm tracking-wide" href="#">
                    Home
                </a>
                <a className="text-white text-sm tracking-wide" href="#">
                    About Us
                </a>
            </div>

            <button className="bg-[#D7A95F] text-white text-sm px-5 py-2 rounded">
                Download Now
            </button>
        </nav>
    );
}
