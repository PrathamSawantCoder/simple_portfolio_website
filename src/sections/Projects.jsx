import { useState, useEffect, useRef } from 'react'

const categories = ['all', 'web', 'mobile', 'design', 'fullstack']
  
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    image: '/projects/yks_web.png',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    image: '/projects/apnine_ai.png',
    category: 'web',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with interactive maps and detailed forecasts.',
    image: '/projects/apple_web.png',
    category: 'web',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans and progress analytics.',
    image: '/projects/yks_web.png',
    category: 'mobile',
    technologies: ['React Native', 'Redux', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Brand Identity Design',
    description: 'Complete brand identity design for tech startup including logo and marketing materials.',
    image: '/projects/apnine_ai.png',
    category: 'design',
    technologies: ['Figma', 'Adobe Creative Suite'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time data visualization.',
    image: '/projects/apple_web.png',
    category: 'fullstack',
    technologies: ['Next.js', 'D3.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }
]

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter))
    }
  }, [activeFilter])

  const getProjectByIndex = (index) => {
    return projects[index % projects.length]
  }

  return (
    <section id="projects" ref={projectsRef} className="section bg-linear-to-br from-background via-background to-surface/50">
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'gradient-bg text-white'
                  : 'glass text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Featured Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-3xl hover-scale"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-linear-to-br from-primary/20 to-highlight/20"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1)',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/50 to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="text-white space-y-4">
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                      <p className="text-sm opacity-90">{project.description}</p>
                      <div className="flex gap-4">
                        <a href={project.demoUrl} className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm hover:bg-white/30 transition-colors">
                          Live Demo
                        </a>
                        <a href={project.githubUrl} className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm hover:bg-white/30 transition-colors">
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 glass">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        style={{ transitionDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All projects grid */}
        <div className="scroll-reveal">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-3xl hover-scale"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-linear-to-br from-primary/20 to-highlight/20"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1)',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/50 to-transparent" />
                  
                  {/* Project badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href={project.demoUrl} className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <div className="w-4 h-4 bg-current rounded" />
                      </a>
                      <a href={project.githubUrl} className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <div className="w-4 h-4 bg-current rounded" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-surface text-muted-foreground rounded-full text-xs font-medium"
                        style={{ transitionDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-surface text-muted-foreground rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="glass-glow rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on new and challenging projects. 
              Let's create something amazing together!
            </p>
            <button className="gradient-bg text-white px-8 py-4 rounded-full font-medium hover-scale">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects