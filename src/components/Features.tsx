'use client'

import { FaHardHat, FaClock, FaAward, FaShieldAlt, FaTools, FaHandshake } from 'react-icons/fa'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: FaHardHat,
    title: 'Expert Craftsmanship',
    description: 'Our team of skilled professionals delivers superior workmanship on every project, ensuring lasting quality and durability.',
  },
  {
    icon: FaClock,
    title: 'On-Time Delivery',
    description: 'We respect your time and deadlines. Projects are completed efficiently without compromising on quality.',
  },
  {
    icon: FaAward,
    title: 'Premium Materials',
    description: 'Using only the highest grade concrete and materials to ensure structural integrity and longevity.',
  },
  {
    icon: FaShieldAlt,
    title: 'Fully Insured',
    description: 'Complete liability and workers compensation insurance for your peace of mind and protection.',
  },
  {
    icon: FaTools,
    title: 'Modern Equipment',
    description: 'State-of-the-art tools and technology for precision work and efficient project completion.',
  },
  {
    icon: FaHandshake,
    title: 'Customer First',
    description: 'Dedicated to exceeding expectations with transparent communication and exceptional service.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Why Choose Us
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Built on Excellence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We combine years of experience with modern techniques to deliver
            outstanding concrete solutions for your project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-200"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Services List */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Residential Driveways',
              'Commercial Foundations',
              'Decorative Concrete',
              'Patios & Walkways',
              'Retaining Walls',
              'Pool Decks',
              'Stamped Concrete',
              'Concrete Repair & Restoration',
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
