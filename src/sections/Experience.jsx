import { useState, useEffect, useRef } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const experienceRef = useRef(null)

  const experiences = [
    {
      id: 1,
      period: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Led a team of 5 developers in building SaaS platform',
        'Reduced application load time by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      icon: '💻'
    },
    {
      id: 2,
      period: '2021 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc',
      location: 'New York, NY',
      description: 'Developed responsive user interfaces and improved user experience across multiple products.',
      achievements: [
        'Redesigned company website increasing conversion by 35%',
        'Built component library used by 10+ teams',
        'Migrated legacy codebase to modern React architecture'
      ],
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'Figma', 'GraphQL'],
      icon: '🎨'
    },
    {
      id: 3,
      period: '2020 - 2021',
      title: 'Junior Web Developer',
      company: 'StartUp Labs',
      location: 'Austin, TX',
      description: 'Started my journey in web development, building websites and learning modern technologies.',
      achievements: [
        'Developed 15+ client websites',
        'Learned and implemented modern JavaScript frameworks',
        'Collaborated with design team to create pixel-perfect implementations'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
      icon: '🚀'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % experiences.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isVisible, experiences.length])

  return (
    <section id="experience" ref={experienceRef} className="section bg-linear-to-br from-surface/30 via-background to-surface/30">
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
           Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the milestones I've achieved along the way
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative scroll-reveal ${index < experiences.length - 1 ? 'pb-12' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-linear-to-b from-primary to-transparent" />
                )}
                
                {/* Timeline dot */}
                <div className="relative flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-linear-to-br from-primary/20 to-highlight/20 rounded-2xl flex items-center justify-center z-10 hover-scale">
                    <span className="text-2xl">{experience.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="glass-glow rounded-3xl p-8 hover-lift">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-lg text-primary font-medium">{experience.company}</p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <p className="text-sm text-muted-foreground">{experience.period}</p>
                          <p className="text-sm text-muted-foreground">{experience.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 pt-4">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                              style={{ transitionDelay: `${techIndex * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Current role highlight */}
            <div className="scroll-reveal">
              <div className="glass-glow rounded-3xl p-6 hover-scale">
                <h3 className="text-xl font-bold mb-4">Current Focus</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-muted-foreground">Building scalable systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-muted-foreground">Mentoring junior developers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-muted-foreground">Contributing to open source</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills overview */}
            <div className="scroll-reveal">
              <div className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
                <div className="space-y-3">
                  {['Frontend Development', 'Backend Architecture', 'Database Design', 'Cloud Services', 'UI/UX Design'].map((skill, index) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-primary' : 'bg-muted-foreground'}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="scroll-reveal">
              <div className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-4">Experience Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">3+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-muted-foreground">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience