import { useState, useEffect, useRef } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const testimonialsRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      company: 'San Francisco, CA',
      avatar: '👩‍💼',
      content: 'Pratham delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding.',
      rating: 5,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Digital Solutions',
      location: 'New York, NY',
      avatar: '👨‍💼',
      content: 'Working with Pratham was a game-changer for our project. He transformed our complex requirements into a beautiful, functional application.',
      rating: 5,
      date: '2023-11-20'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      location: 'Austin, TX',
      avatar: '👩‍💻',
      content: 'Pratham\'s work on our brand identity was phenomenal. He captured our vision perfectly and delivered beyond what we imagined.',
      rating: 5,
      date: '2023-09-10'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'CTO',
      company: 'Innovation Labs',
      location: 'Seattle, WA',
      avatar: '👨‍💻',
      content: 'The dashboard Pratham built for our analytics team has revolutionized how we track performance. Highly recommend his services!',
      rating: 5,
      date: '2023-07-05'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Founder',
      company: 'StartupHub',
      location: 'Boston, MA',
      avatar: '👩‍💼',
      content: 'Pratham is not just a developer, he\'s a problem-solver. He helped us scale our application and improved performance significantly.',
      rating: 5,
      date: '2023-05-12'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 5000)
  }

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(nextTestimonial, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, testimonials.length])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-muted-foreground'}`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <section id="testimonials" ref={testimonialsRef} className="section bg-linear-to-br from-surface/30 via-background to-surface/30">
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="mb-16 scroll-reveal">
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial card */}
            <div className="glass-glow rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary) 2px, transparent 2px), radial-gradient(circle at 75% 75%, var(--color-highlight) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }} />
              </div>
              
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="text-6xl text-primary/20 mb-6">"</div>
                
                {/* Testimonial content */}
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                  {testimonials[currentIndex].content}
                </p>
                
                {/* Rating */}
                <div className="flex gap-2 mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-highlight/20 rounded-2xl flex items-center justify-center text-2xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-scale"
              aria-label="Previous testimonial"
            >
              <div className="w-6 h-0.5 bg-current transform rotate-90" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-scale"
              aria-label="Next testimonial"
            >
              <div className="w-6 h-0.5 bg-current transform rotate-90" />
            </button>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="scroll-reveal">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">More Feedback</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter((_, index) => index !== currentIndex).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="glass rounded-2xl p-6 hover-lift"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 scroll-reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">24</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-12 scroll-reveal">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials