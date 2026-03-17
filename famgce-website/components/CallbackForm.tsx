'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      return
    }

    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <section className="bg-dark section-pad overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <SectionHeading
              title="REQUEST A"
              highlight="CALL BACK"
              align="center"
              dark
            />
            <p className="font-heading text-sm text-gray-500 tracking-[0.3em] font-bold uppercase mt-4">
              Tell us what you need
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-4 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-Mail Address"
                className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-4 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-4 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors"
                required
              />
            </div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-4 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors resize-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-5 font-heading text-lg font-bold tracking-widest uppercase transition-all duration-300 ${
                status === 'loading' 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-green-brand hover:bg-green-dark text-white'
              }`}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-brand font-bold text-center mt-2"
              >
                Message sent successfully!
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 font-bold text-center mt-2"
              >
                Please fill in all fields correctly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
