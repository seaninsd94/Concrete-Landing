'use client'

import { FaArrowRight, FaStar } from 'react-icons/fa'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Luxury Background Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-100"></div>

      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-slate-900/30 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                  Southwestern Concrete
                </span>
              </h1>
              <p className="text-xs text-gray-400 mt-1">Luxury Hardscape Design</p>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 font-medium"
                >
                  Our Work
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-200 font-medium"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8">
          {/* Main Headline - Aspirational & Luxurious */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
            <span className="block text-white">Transform Your Yard</span>
            <span className="block bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent mt-3">
              Into an Outdoor Oasis
            </span>
          </h1>

          {/* Premium Description */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
            Elevate your property with custom-designed stamped concrete patios,
            elegant pool decks, and stunning driveways that rival natural stone—
            at a fraction of the cost. Where luxury meets lasting value.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 pt-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5.0 Rating on Google</span>
            </div>
            <span className="text-gray-600">•</span>
            <span>Fully Licensed & Insured</span>
            <span className="text-gray-600">•</span>
            <span>15+ Years Serving Upscale Communities</span>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              Schedule Free Consultation
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-lg font-semibold rounded-xl backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 transition-all duration-300"
            >
              View Our Portfolio
            </button>
          </div>

          {/* Luxury Stats - Focused on High-End Residential */}
          <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="space-y-3 group cursor-default">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                200+
              </div>
              <div className="text-gray-400 text-lg">Luxury Estate Projects</div>
              <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-transparent mx-auto rounded-full"></div>
            </div>
            <div className="space-y-3 group cursor-default">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                $2M+
              </div>
              <div className="text-gray-400 text-lg">Average Home Value</div>
              <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-transparent mx-auto rounded-full"></div>
            </div>
            <div className="space-y-3 group cursor-default">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                30%
              </div>
              <div className="text-gray-400 text-lg">Avg. Property Value Increase</div>
              <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-transparent mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Social Proof Snippet */}
          <div className="pt-8">
            <p className="text-gray-400 text-sm italic">
              "Transformed our backyard into a resort-style paradise. Worth every penny!"
            </p>
            <p className="text-amber-400 text-sm font-semibold mt-1">
              — Jennifer M., Paradise Valley Estates
            </p>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('features')}
          className="text-amber-400/60 hover:text-amber-400 transition-colors"
          aria-label="Scroll to portfolio"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  )
}
