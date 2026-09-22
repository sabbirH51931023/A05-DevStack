function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-5">
              🚀 Build Your Developer Stack
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Discover the
              <span className="gradient-text"> Technologies </span>
              You Need
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              Explore modern web technologies, discover what fits your
              development goals, and build your own personalized technology
              stack.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#technologies"
                className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Explore Technologies →
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-full font-semibold border-2 border-slate-300 text-slate-700 hover:border-pink-400 hover:text-pink-500 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">

              <div className="absolute -top-5 -left-5 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-60"></div>

              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>

              <div className="relative bg-slate-900 rounded-3xl p-6 shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <p className="text-purple-400">
                    const <span className="text-white">stack</span> = [
                  </p>

                  <p className="text-orange-400 pl-6">
                    "React",
                  </p>

                  <p className="text-orange-400 pl-6">
                    "Node.js",
                  </p>

                  <p className="text-orange-400 pl-6">
                    "MongoDB",
                  </p>

                  <p className="text-orange-400 pl-6">
                    "Docker",
                  </p>

                  <p className="text-purple-400">
                    ];
                  </p>

                  <p className="text-green-400">
                    // Build something amazing 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;