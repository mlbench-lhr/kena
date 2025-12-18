// components/footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-[#2F563C] text-white py-10 md:py-20">
      <div className="flex justify-between flex-col md:flex-row gap-y-6 w-full px-4 md:px-10 [@media(min-width:1400px)]:px-26 [@media(min-width:1400px)]:w-365 mx-auto">
        <div className="max-w-sm">
          <h2 className="text-3xl font-serif mb-4">Kena</h2>

          <p className="text-sm leading-relaxed mb-6">
            See your emotions clearly.
            <br />
            Grow with intention.
          </p>

          <button className="cursor-not-allowed bg-[#F0B964] text-white text-[14px] px-6 py-2 rounded-lg">
            Download
          </button>
        </div>

        <div className="pe-0 md:pe-10 lg:pe-50">
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="cursor-not-allowed">
                Founder’s Story
              </a>
            </li>
            <li>
              <a href="#" className="cursor-not-allowed">
                How Makena Works
              </a>
            </li>
            <li>
              <a href="#" className="cursor-not-allowed">
                Contact Us
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
