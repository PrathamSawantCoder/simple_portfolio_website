import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY' // Replace with your actual Web3Forms access key
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'
  const [honeypot, setHoneypot] = useState('')
  const contactRef = useRef(null)

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'pratham@example.com',
      link: 'mailto:pratham@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM PST',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/in/pratham' },
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/pratham' },
    { icon: '🐦', name: 'Twitter', url: 'https://twitter.com/pratham' },
    { icon: '📷', name: 'Instagram', url: 'https://instagram.com/pratham' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check honeypot field
    if (honeypot) {
      console.log('Bot detected')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          access_key: formData.access_key
        })
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'success':
        return {
          title: 'Message Sent Successfully!',
          message: 'Thank you for reaching out. I\'ll get back to you within 24 hours.',
          type: 'success'
        }
      case 'error':
        return {
          title: 'Something Went Wrong',
          message: 'Please try again or contact me directly at pratham@example.com',
          type: 'error'
        }
      default:
        return null
    }
  }

  return (
    <section id="contact" ref={contactRef} className="section bg-linear-to-br from-background via-background to-surface/50">
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="scroll-reveal">
            <div className="glass-glow rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-color-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-color-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-color-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-color-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-color-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-white py-4 rounded-lg font-medium hover-scale disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status message */}
                {getStatusMessage() && (
                  <div className={`p-4 rounded-lg ${
                    getStatusMessage().type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}>
                    <div className="font-medium">{getStatusMessage().title}</div>
                    <div className="text-sm mt-1">{getStatusMessage().message}</div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact info and social */}
          <div className="space-y-8">
            {/* Contact information */}
            <div className="scroll-reveal">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Contact <span className="gradient-text">Information</span></h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-all duration-300 hover-scale"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium">{info.title}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="scroll-reveal">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Connect <span className="gradient-text">With Me</span></h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-surface transition-all duration-300 hover-scale"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-lg">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm text-muted-foreground">Follow me</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick response info */}
            <div className="scroll-reveal">
              <div className="glass-glow rounded-3xl p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2">Quick Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours during business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact