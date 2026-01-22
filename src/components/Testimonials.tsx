'use client'

import { FaStar, FaQuoteLeft } from 'react-icons/fa'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    company: 'Residential Client',
    content: 'Outstanding work on our driveway! The team was professional, punctual, and the quality exceeded our expectations. The concrete looks amazing and has transformed our home\'s curb appeal.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    company: 'Riverside Apartments',
    content: 'We\'ve worked with many contractors over the years, but this team stands out. They completed our commercial foundation project ahead of schedule and under budget. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    company: 'Modern Spaces Design',
    content: 'The decorative concrete work they did for our client was absolutely stunning. Their attention to detail and craftsmanship is unmatched. We\'ll definitely use them for future projects.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Business Owner',
    company: 'Thompson Retail Group',
    content: 'Professional from start to finish. They handled our commercial parking lot project with expertise and efficiency. The communication was excellent throughout the entire process.',
    rating: 5,
  },
  {
    name: 'Jessica Martinez',
    role: 'Homeowner',
    company: 'Residential Client',
    content: 'We couldn\'t be happier with our new patio and walkway. The stamped concrete design is beautiful, and the entire process was smooth and stress-free. Worth every penny!',
    rating: 5,
  },
  {
    name: 'Robert Williams',
    role: 'General Contractor',
    company: 'Williams Construction',
    content: 'As a GC, I\'ve partnered with this concrete team on multiple projects. Their reliability and quality work make them my go-to choice. They consistently deliver exceptional results.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-yellow-400' : 'text-gray-600'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-3xl text-primary-500 opacity-50" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-xl mb-8 text-primary-100">
            Get your free consultation and quote today
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}
