'use client'

import { useState, FormEvent } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In production, replace with actual API call
      console.log('Form submitted:', formData)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-base text-amber-400 font-bold tracking-wide uppercase">
            Schedule Your Consultation
          </h2>
          <p className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Let's Design Your Dream Outdoor Space
          </p>
          <p className="mt-5 max-w-3xl text-xl text-gray-300 mx-auto leading-relaxed">
            Ready to elevate your property with luxury hardscape? Our design team will work with you
            to create a custom plan that perfectly matches your vision and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-amber-400">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-300">Call Us</div>
                    <a href="tel:+14805551234" className="text-white hover:text-amber-400 transition-colors text-lg font-medium">
                      (480) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-300">Email</div>
                    <a href="mailto:info@southwesternconcrete.com" className="text-white hover:text-amber-400 transition-colors">
                      info@southwesternconcrete.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-300">Serving</div>
                    <p className="text-white">
                      Scottsdale, Paradise Valley,<br />
                      Phoenix & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-white">Consultation Hours</h4>
              <div className="space-y-3 text-white">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="font-bold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span className="font-bold">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="font-bold">By Appointment</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/90 text-sm italic">
                  Evening & weekend consultations available for your convenience
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-800/50 rounded-2xl p-10 border border-amber-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-amber-400">Request Your Free Design Consultation</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="(480) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-300">
                    Project Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white"
                  >
                    <option value="">Select project type</option>
                    <option value="patio">Stamped Concrete Patio</option>
                    <option value="pool-deck">Pool Deck & Surrounds</option>
                    <option value="driveway">Grand Estate Driveway</option>
                    <option value="outdoor-living">Outdoor Living Space</option>
                    <option value="walkways">Decorative Walkways</option>
                    <option value="multi-level">Multi-Level Entertainment Area</option>
                    <option value="full-backyard">Complete Backyard Transformation</option>
                    <option value="other">Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-gray-300">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="20-40k">$20,000 - $40,000</option>
                    <option value="40-75k">$40,000 - $75,000</option>
                    <option value="75-150k">$75,000 - $150,000</option>
                    <option value="150k+">$150,000+</option>
                    <option value="flexible">Flexible / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold mb-2 text-gray-300">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As Soon As Possible</option>
                    <option value="1-3months">1-3 Months</option>
                    <option value="3-6months">3-6 Months</option>
                    <option value="planning">Just Planning / Exploring</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Tell Us About Your Vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Describe your ideal outdoor living space, design preferences, or any specific features you'd like to include..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-gray-600 disabled:to-gray-700 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Consultation</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-400 font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Request received! We'll contact you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-400 font-semibold">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </div>

              {/* Privacy Note */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-gray-400 text-sm text-center">
                  🔒 Your information is confidential and will never be shared. We typically respond within 4-24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
