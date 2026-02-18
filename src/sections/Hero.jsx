import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/Button'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const heroRef = useRef(null)

  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Thinker']

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Typewriter effect for main title
    const title = "Hi, I'm Pratham"
    let charIndex = 0
    
    const typeTitle = () => {
      if (charIndex < title.length) {
        setTypedText(title.substring(0, charIndex + 1))
        charIndex++
        setTimeout(typeTitle, 100)
      }
    }
    
    typeTitle()

    // Role cycling animation
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(roleInterval)
  }, [isVisible])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-background via-background to-surface"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(32, 178, 166, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 178, 166, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto mt-24 lg:mt-0 px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">{typedText}</span>
                <span className="block gradient-text text-4xl lg:text-6xl mt-4 h-16">
                  {roles[currentRoleIndex]}
                  <span className="inline-block w-1 h-12 bg-primary ml-2 animate-blink" />
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I craft beautiful, functional digital experiences that solve real problems. 
                Passionate about clean code, intuitive design, and creating meaningful connections.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hover-lift gradient-bg text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover-lift px-8 py-4 text-lg"
              >
                View My Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right content - Interactive profile area */}
          <div className="relative">
            <div className="relative glass-glow rounded-3xl p-8 hover-scale">
              {/* Profile placeholder */}
              <div className="aspect-square bg-linear-to-br from-primary/20 to-highlight/20 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-6xl font-bold gradient-text">P</div>
              </div>
              
              {/* Interactive skills */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'UI/UX', 'Python', 'MongoDB'].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-6">
                {['github', 'linkedin', 'twitter', 'instagram'].map((social, index) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-scale"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-5 h-5 bg-current rounded" />
                  </a>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-highlight/20 rounded-full animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}

export default Hero