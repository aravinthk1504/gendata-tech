import { useState } from "react";
import { Link } from "react-router-dom";

import logoMark from "../assets/gendata-tech-mark.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Training", path: "/training" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        {/* ======================================================
            BRAND / LOGO
        ====================================================== */}

        <Link
          to="/"
          aria-label="GenData Tech Home"
          className="flex items-center gap-1"
        >
          <img
            src={logoMark}
            alt="GenData Tech"
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12 lg:h-16 lg:w-16"
          />

          <div className="hidden flex-col sm:flex">
            <span
              className="font-heading text-[21px] font-bold leading-none tracking-[-0.03em]"
              style={{
                background:
                  "linear-gradient(90deg, #003DB8 0%, #002DCC 45%, #057CFA 75%, #18BDF2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              GenData Tech
            </span>

            <span className="mt-1 font-body text-[10px] font-medium tracking-[0.05em] text-[#057CFA]">
              Think - Build - Evolve
            </span>
          </div>
        </Link>

        {/* ======================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-body text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ======================================================
            DESKTOP CTA
        ====================================================== */}

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-body text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#057CFA] hover:bg-[#057CFA]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* ======================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 bg-white transition ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-white transition ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* ======================================================
          MOBILE NAVIGATION
      ====================================================== */}

      {menuOpen && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#06142f]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:hidden">
          {/* MOBILE BRAND */}

          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
            <img
              src={logoMark}
              alt="GenData Tech"
              className="h-10 w-10 object-contain"
            />

            <div className="flex flex-col">
              <span
                className="font-heading text-lg font-bold leading-none"
                style={{
                  background:
                    "linear-gradient(90deg, #003DB8 0%, #002DCC 45%, #057CFA 75%, #18BDF2 100%)",

                  WebkitBackgroundClip: "text",

                  WebkitTextFillColor: "transparent",

                  backgroundClip: "text",
                }}
              >
                GenData Tech
              </span>

              <span className="mt-1 font-body text-[9px] font-medium tracking-[0.08em] text-[#057CFA]">
                Think - Build - Evolve
              </span>
            </div>
          </div>

          {/* MOBILE LINKS */}

          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#057CFA] px-5 py-3 text-center font-body text-sm font-semibold text-white transition hover:bg-[#002DCC]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
