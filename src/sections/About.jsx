import { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState([])
  const aboutRef = useRef(null)

  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'UI/UX Design', level: 75, category: 'Design' },
    { name: 'Python', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'Git', level: 85, category: 'Tools' }
  ]

  const achievements = [
    { icon: '🏆', title: '50+ Projects', description: 'Successfully delivered' },
    { icon: '⭐', title: '4.9 Rating', description: 'Client satisfaction' },
    { icon: '🚀', title: 'Fast Delivery', description: 'On time always' },
    { icon: '💡', title: 'Creative Solutions', description: 'Innovative approaches' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animate skills on scroll
      const timer = setTimeout(() => {
        setAnimatedSkills(skills.map((skill, index) => ({
          ...skill,
          animated: true
        })))
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skills])

  return (
    <section id="about" ref={aboutRef} className="section bg-linear-to-br from-background via-background to-surface/50">
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with creativity and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <div className="glass-glow rounded-3xl p-8 hover-scale">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 bg-linear-to-br from-primary/20 to-highlight/20 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">P</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Pratham</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate full-stack developer with 3+ years of experience creating 
                  beautiful, functional web applications. I specialize in modern JavaScript 
                  frameworks and have a keen eye for user experience design.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 scroll-reveal">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 text-center hover-lift"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <div className="text-lg font-bold gradient-text">{achievement.title}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Technical <span className="gradient-text">Skills</span></h3>
              
              <div className="space-y-6">
                {animatedSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
                      <div 
                        className="gradient-bg h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: skill.animated ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="scroll-reveal">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Interests & <span className="gradient-text">Passions</span></h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Web Development', 'UI/UX Design', 'Open Source', 
                  'Machine Learning', 'Cloud Computing', 'Photography',
                  'Music Production', 'Gaming', 'Reading'
                ].map((interest, index) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-surface rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 hover-scale"
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="scroll-reveal">
              <div className="glass-glow rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-3">Ready to work together?</h4>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to take on new challenges and collaborate on innovative projects.
                </p>
                <button className="gradient-bg text-white px-6 py-3 rounded-full font-medium hover-scale">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About