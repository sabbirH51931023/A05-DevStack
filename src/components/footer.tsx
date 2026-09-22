function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-300 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
                DS
              </div>

              <span className="text-xl font-bold text-white">
                Dev Stack
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Discover modern technologies and build your personalized
              developer stack with Dev Stack.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Product
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#technologies" className="block hover:text-white">
                Technologies
              </a>

              <a href="#projects" className="block hover:text-white">
                Projects
              </a>

              <a href="#home" className="block hover:text-white">
                Features
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>

              <a href="#home" className="block hover:text-white">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-sm">
              <a href="#home" className="block hover:text-white">
                Privacy
              </a>

              <a href="#home" className="block hover:text-white">
                Terms
              </a>

              <a href="#home" className="block hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate-500">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#home" className="hover:text-white">
              Privacy
            </a>

            <a href="#home" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;