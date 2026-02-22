import { useState, useEffect, useRef } from "react";
import { Laptop, Zap } from "lucide-react";


const experiences = [
    {
      id: 1,
      period: "2023 - 2024",
      title: "Electrician",
      company: "Lieksan Sähkö Oy",
      companyLink: "https://www.lieksansahko.fi/",
      location: "Lieksa, Finland",
      description:
        "Started working as an electrician while studying in Riveria, Finland. Installed and maintained various different kinds electrical systems for houses, offices and factories.",
      achievements: [
        "Installed and maintained electrical systems for 10+ houses",
        "Managed and repaired electrical systems for 5+ commercial/ industrial buildings",
        "Worked on 2+ big projects. ",
      ],
      technologies: [],
      icon: Zap,
    },
    {
      id: 2,
      period: "2024 - Present",
      title: "Electrician",
      company: "Ylä Karjalan Sähkö Oy",
      companyLink: "https://www.ylakarjalansahko.fi/",
      location: "Nurmes, Finland",
      description:
        "Joined a company closer to my residence to continue similar responsibilities, securing a salary increase and benefiting from enhanced professional development opportunities.",
      achievements: [
        "Installed and maintained electrical systems for 50+ houses",
        "Managed and repaired electrical systems for 10+ commercial/ industrial buildingss",
        "Worked on 5+ big projects. ",
      ],
      technologies: [],
      icon: Zap,
    },
    {
      id: 3,
      period: "2024 - Present",
      title: "Self Learning Developer",
      company: "Self-taught",
      companyLink: "#",
      location: "Nurmes, Finland",
      description:
        "Transistioned from electrician to self-taught developer. Started my journey in web development, building websites and learning modern technologies to enhance my skills and learn what I loved to do.",
      achievements: [
        "Developed 5+ self-taught websites",
        "Learned and implemented modern JavaScript frameworks",
        "Collaborated with AI tools to enhance my learning experience",
        "Working on 2+ big SAAS projects.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Git",
      ],
      icon: Laptop,
    },
  ];

  const skills = [
    {name: "Frontend Development", level: 4},
    {name: "Backend Architecture", level: 3},
    {name: "Database Design", level: 3},
    {name: "Cloud Services", level: 4},
    {name: "UI/UX Design", level: 4},
  ];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const experienceRef = useRef(null);
  const MAX_LEVEL = 5;

 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % experiences.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, experiences.length]);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section bg-linear-to-br from-surface/30 via-background to-surface/30"
    >
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the milestones I've achieved along the
            way
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map(
              (
                {
                  icon: Icon,
                  id,
                  title,
                  company,
                  companyLink,
                  location,
                  period,
                  description,
                  achievements,
                  technologies,
                },
                index,
              ) => (
                <div
                  key={id}
                  className={`relative scroll-reveal ${index < experiences.length - 1 ? "pb-12" : ""}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-linear-to-b from-primary to-transparent" />
                  )}

                  {/* Timeline dot */}
                  <div className="relative flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 bg-linear-to-br from-primary/20 to-highlight/20 rounded-2xl flex items-center justify-center z-10 hover-scale">
                      <span className="text-2xl">
                        <Icon />
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="glass-glow rounded-3xl p-8 hover-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{title}</h3>
                            <a
                              className="text-lg text-primary font-medium"
                              href={companyLink}
                              target="_blank"
                            >
                              {company}
                            </a>
                          </div>
                          <div className="text-right mt-2 sm:mt-0">
                            <p className="text-sm text-muted-foreground">
                              {period}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {location}
                            </p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-3"
                              >
                                <span className="text-primary mt-1">✓</span>
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 pt-4">
                            {technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                                style={{
                                  transitionDelay: `${techIndex * 0.05}s`,
                                }}
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
              ),
            )}
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
                    <span className="text-muted-foreground">
                      Building scalable systems
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <span className="text-muted-foreground">
                      Learning New Technologies
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <span className="text-muted-foreground">
                      Focusing on Problem Solving
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills overview */}
            <div className="scroll-reveal">
              <div className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
                <div className="space-y-3">
                  {skills.map(({name, level}, index) => (
                    <div
                      key={name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted-foreground">{name}</span>
                      <div className="flex gap-1">
                        {[...Array.from({ length: MAX_LEVEL} )].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < level ? "bg-primary" : "bg-muted-foreground"}`}
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
                    <div className="text-2xl font-bold gradient-text">1.5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  {/* <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div> */}
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects
                    </div>
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
  );
};

export default Experience;
