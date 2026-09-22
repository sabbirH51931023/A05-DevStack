import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-slate-700"></span>
              <span className="block w-6 h-0.5 bg-slate-700"></span>
              <span className="block w-6 h-0.5 bg-slate-700"></span>
            </div>
          </button>

          {/* Logo */}
          <a href="./B14-A05-DevStack/assets/logo-text.png" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
              DS
            </div>

            <span className="text-xl font-bold gradient-text">
              Dev Stack
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-pink-500 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-slate-700">
              Sign In
            </button>

            <button className="gradient-bg text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-5 border-t border-slate-100">
            <div className="flex flex-col pt-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-slate-700 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;