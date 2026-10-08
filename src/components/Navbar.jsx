import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Training", path: "/training" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ]

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          
          {/* Temporary logo until SVG is added */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary font-heading text-sm font-bold text-white">
            GD
          </div>

          <div>
            <p className="font-heading text-xl font-bold leading-none text-white">
              GenData
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-blue-200">
              Tech
            </p>
          </div>

        </Link>


        {/* DESKTOP NAVIGATION */}
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


        {/* DESKTOP CTA */}
        <div className="hidden lg:block">

          <Link
            to="/contact"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-body text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-brand-accent"
          >
            Let's Talk
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Toggle navigation"
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


      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#06142f]/95 p-6 backdrop-blur-xl lg:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-brand-accent px-5 py-3 text-center font-body text-sm font-semibold text-white"
            >
              Let's Talk
            </Link>

          </div>

        </div>
      )}

    </header>
  )
}

export default Navbar