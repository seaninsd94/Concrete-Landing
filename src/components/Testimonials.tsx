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
    name: 'Jennifer & Michael Patterson',
    role: 'Homeowners',
    company: 'Paradise Valley Estates',
    content: 'Our backyard went from boring to breathtaking! The stamped concrete patio and pool deck look like real travertine. We\'ve hosted three dinner parties already and our guests can\'t believe it\'s concrete. Best investment we\'ve made in our home.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Luxury Home Builder',
    company: 'Silverleaf',
    content: 'I exclusively use Southwestern Concrete for all my custom estate homes. Their attention to detail and ability to execute complex designs is unmatched. My clients are always thrilled with the results.',
    rating: 5,
  },
  {
    name: 'Amanda Rodriguez',
    role: 'Homeowner',
    company: 'DC Ranch',
    content: 'We compared three contractors and Southwestern wasn\'t the cheapest, but their portfolio spoke for itself. The stamped concrete driveway and walkways added instant curb appeal. Our home appraised $85k higher than expected!',
    rating: 5,
  },
  {
    name: 'James & Karen Foster',
    role: 'Homeowners',
    company: 'Grayhawk',
    content: 'Turned our plain backyard into a resort-style oasis! The multi-level patio with integrated fire pit and seating walls is perfect for Arizona entertaining. Professional, clean, and finished exactly on schedule.',
    rating: 5,
  },
  {
    name: 'Robert Morrison',
    role: 'Estate Owner',
    company: 'Troon North',
    content: 'After living here 15 years, we finally redid our outdoor spaces. The custom ashlar pattern perfectly complements our Mediterranean architecture. It looks like imported Italian stone but at a fraction of the cost.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Homeowner',
    company: 'Scottsdale Ranch',
    content: 'From design consultation to final sealing, the entire experience was first-class. They protected our landscaping, respected our privacy, and the pool deck is absolutely stunning. Worth every penny!',
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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-base text-amber-600 font-bold tracking-wide uppercase">
            Client Reviews
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Luxury Homeowners Love Us
          </p>
          <p className="mt-5 max-w-3xl text-xl text-gray-600 mx-auto leading-relaxed">
            Join hundreds of satisfied homeowners in Arizona's most prestigious
            communities who transformed their outdoor spaces into luxury retreats.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300 flex flex-col hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-3xl text-amber-500 opacity-40" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-5 h-5" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-base">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-amber-100 pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
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
                    <div className="text-sm text-amber-600 font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-gray-600 font-medium">Years Serving<br />Luxury Estates</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              5.0
            </div>
            <div className="text-gray-600 font-medium">Average Google<br />Rating</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              95%
            </div>
            <div className="text-gray-600 font-medium">Referral &<br />Repeat Clients</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              $50K
            </div>
            <div className="text-gray-600 font-medium">Average Project<br />Investment</div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl border border-amber-500/20">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h3>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Schedule your complimentary design consultation and discover how stamped concrete
            can elevate your property's value and beauty.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
