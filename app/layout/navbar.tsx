"use client";
import { useState } from "react";
import { Hourglass, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#f0b964] text-[white] text-center py-2 text-base font-extrabold!">
        App is in development phase, wil be live soon
      </div>
      <nav className="w-full bg-[#2F563C] px-4 sm:px-6 lg:px-26 py-4">
        <div className="w-full max-w-365 mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-3 z-20">
            <span className="text-white text-[32px] font-serif font-normal">
              Kena
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a
              className="text-white text-sm tracking-wide hover:text-[#F0B964] transition-colors"
              href="#"
            >
              Home
            </a>
            <a
              className="text-white text-sm tracking-wide hover:text-[#F0B964] transition-colors"
              href="#founderStory"
            >
              About Us
            </a>
            <a
              className="text-white text-sm tracking-wide hover:text-[#F0B964] transition-colors"
              href="#whyKena"
            >
              Why Kena
            </a>
          </div>
          {/* Desktop CTA Button */}
          <button
            disabled
            className="cursor-pointer justify-center items-center gap-2 w-fit hidden lg:flex bg-[#F0B964] text-white text-[14px] px-5 py-2 rounded-lg hover:bg-[#e5a84d] transition-colors z-20"
          >
            <span className="">In Development</span>
            <Hourglass size={12} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white z-20 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-[80%] md:w-64 bg-[#2F563C] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="w-full flex justify-start ps-2 pt-4 items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white z-20 p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="flex flex-col pt-2 px-6">
              <a
                className="text-white text-base py-3 border-b border-white/10 hover:text-[#F0B964] transition-colors"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="text-white text-base py-3 border-b border-white/10 hover:text-[#F0B964] transition-colors"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                className="text-white text-base py-3 border-b border-white/10 hover:text-[#F0B964] transition-colors"
                href="#whyKena"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Kena
              </a>
              <button
                className="cursor-pointer justify-center items-center gap-2 flex! bg-[#F0B964] text-white text-sm px-5 py-3 rounded-lg mt-6 hover:bg-[#e5a84d] transition-colors"
                disabled
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="">In Development</span>
                <Hourglass size={12} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
