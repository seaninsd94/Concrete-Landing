'use client'

import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="text-primary-400">Concrete</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm">
            <span className="text-primary-400 text-sm font-medium">
              Building Excellence Since 2024
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block">Build Something</span>
            <span className="block text-primary-400 mt-2">Amazing Today</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed">
            Premium concrete solutions for residential and commercial projects.
            Quality craftsmanship, reliable service, and lasting results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('features')}
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to features"
        >
          <svg
            className="w-6 h-6"
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
