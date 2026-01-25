'use client'

import { FaPalette, FaGem, FaChartLine, FaUserTie, FaLeaf, FaHome } from 'react-icons/fa'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: FaPalette,
    title: 'Custom Design Studio',
    description: 'Work with our designers to create one-of-a-kind patterns, colors, and textures that perfectly complement your home\'s architecture and your personal style.',
  },
  {
    icon: FaGem,
    title: 'Luxury Finishes',
    description: 'Choose from premium stamped patterns that replicate natural stone, slate, or custom designs. Each surface is hand-finished for authentic luxury aesthetics.',
  },
  {
    icon: FaChartLine,
    title: 'Investment-Grade Quality',
    description: 'Our hardscape installations increase property values by an average of 30% while providing decades of beauty with minimal maintenance.',
  },
  {
    icon: FaUserTie,
    title: 'White-Glove Service',
    description: 'From initial consultation to final walkthrough, experience concierge-level service. We respect your home, time, and privacy throughout the entire process.',
  },
  {
    icon: FaLeaf,
    title: 'Outdoor Living Spaces',
    description: 'Transform your backyard into an entertainment paradise with elegant patios, fire pit areas, outdoor kitchens, and seamless pool deck integration.',
  },
  {
    icon: FaHome,
    title: 'Estate-Focused Expertise',
    description: 'Specializing in high-end residential properties. We understand the unique requirements and expectations of luxury homeowners.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-base text-amber-600 font-bold tracking-wide uppercase">
            The Southwestern Difference
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Luxury Hardscape Design
          </p>
          <p className="mt-5 max-w-3xl text-xl text-gray-600 mx-auto leading-relaxed">
            Elevate your outdoor living with custom-designed stamped concrete that rivals
            natural stone—combining timeless elegance with modern durability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-amber-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 mb-6 group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Premium Services Showcase */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Luxury Services */}
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl p-10 border border-amber-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-amber-600">✦</span>
              Luxury Hardscape Services
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Custom Stamped Concrete Patios',
                'Resort-Style Pool Decks',
                'Grand Estate Driveways',
                'Outdoor Kitchen Foundations',
                'Fire Pit & Seating Areas',
                'Decorative Walkways & Pathways',
                'Multi-Level Entertaining Spaces',
                'Integrated Landscape Features',
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Options */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-amber-400">✦</span>
              Premium Design Options
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-amber-300 mb-3 text-lg">Stamped Patterns</h4>
                <p className="text-gray-300 leading-relaxed">
                  Slate • Flagstone • Cobblestone • Ashlar • Wood Plank • Travertine • Custom Designs
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-3 text-lg">Color Palettes</h4>
                <p className="text-gray-300 leading-relaxed">
                  Desert Tones • Earth Blends • Charcoal & Graphite • Sandstone Hues • Custom Color Matching
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-300 mb-3 text-lg">Premium Finishes</h4>
                <p className="text-gray-300 leading-relaxed">
                  Exposed Aggregate • Polished Concrete • Salt Finish • Broom Texture • High-Gloss Sealer
                </p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-amber-200 font-semibold italic">
                  Every project is custom-designed to your vision and property aesthetics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
