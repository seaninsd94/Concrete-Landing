'use client'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Southwestern Concrete
              </span>
            </h3>
            <p className="text-xs text-amber-400 mb-4 font-semibold">
              Luxury Hardscape Design
            </p>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming luxury estates across Arizona with custom-designed stamped concrete.
              Serving Paradise Valley, Scottsdale, and Phoenix's most prestigious communities since 2009.
            </p>

            {/* Contact Quick Links */}
            <div className="space-y-3 mb-6">
              <a href="tel:+14805551234" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors group">
                <FaPhone className="text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">(480) 555-1234</span>
              </a>
              <a href="mailto:info@southwesternconcrete.com" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors group">
                <FaEnvelope className="text-amber-400 group-hover:scale-110 transition-transform" />
                <span>info@southwesternconcrete.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-amber-500"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-amber-500"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-amber-500"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-amber-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-400 transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-400 transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-400 transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-400 transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Get Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Luxury Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-amber-400">Premium Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Stamped Concrete Patios</li>
              <li>Pool Decks & Surrounds</li>
              <li>Estate Driveways</li>
              <li>Outdoor Living Spaces</li>
              <li>Fire Pit & Seating Areas</li>
              <li>Decorative Walkways</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Southwestern Concrete. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                ROC License #123456
              </a>
            </div>
          </div>

          {/* Additional Trust Badge */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Fully Licensed, Bonded & Insured | Serving Arizona's Luxury Communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
