import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/Button";
import { scrollToSection } from "@/utils/scrollToSection";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Box, Camera } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/PrathamSawantCoder",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/pratham-sawant-613467251",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://prathamsawant.artstation.com/",
    icon: Box,
    label: "Artstation",
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const heroRef = useRef(null);

  const roles = ["Full Stack Developer", "UI/UX Designer", "Creative Thinker"];
  const sequence = roles.flatMap((role) => [role, 2000]);

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
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(32, 178, 166, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(32, 178, 166, 0.3) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto mt-24 lg:mt-0 px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Hi, I'm Pratham</span>
                <span className="block gradient-text-hero text-4xl lg:text-6xl mt-3 h-16">
                  <TypeAnimation sequence={sequence} repeat={Infinity} />
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-open-sans hover:text-primary transistion-colors duration-300 mt-2">
                I make beautiful, modern and user-friendly Apps and Website to
                solve real problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="hover-lift gradient-bg text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift px-8 py-4 text-lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div> */}
          </div>

          {/* Right content - Interactive profile area */}
          <div className="relative mb-5">
            <div className="relative glass-strong glass-glow rounded-3xl p-8 origin-bottom-left rotate-6 lg:rotate-8 scale-70 hover:rotate-0 hover:scale-100  transition-transform duration-700">
              {/* Profile placeholder */}
              <div className="aspect-square rounded-[1.4rem] bg-linear-to-br from-white/10 via-primary/10 to-highlight/15 p-px shadow-[0_20px_60px_rgba(0,0,0,0.28)] mb-6">
                <div className="relative w-full h-full overflow-hidden rounded-[1.3rem] border border-white/10 bg-linear-to-br from-primary/20 to-highlight/20 text-6xl font-bold gradient-text">
                  
                  <img src="/pratham_photos/photo_3.jpeg" alt="pratham" className="w-full h-full object-cover rounded-lg"/>
                  <div className="absolute inset-0 rounded-[1.3rem] ring-1 ring-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-30px_60px_rgba(0,0,0,0.2)] pointer-events-none" />
                  <div className="absolute inset-0 rounded-lg bg-linear-to-t from-black/45 via-black/10 to-white/10 pointer-events-none" />
                  <div className="absolute inset-x-[12%] top-0 h-20 rounded-full bg-white/20 blur-2xl opacity-70 pointer-events-none" />
                  <div className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/20 bg-white/8 backdrop-blur-md pointer-events-none" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm pointer-events-none">
                    <Camera className="h-3.5 w-3.5" />
                    Shot on camera
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white pointer-events-none">
                    <div className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-sm">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">Portrait</p>
                      <p className="text-sm font-semibold">Captured moment</p>
                    </div>
                    <div className="rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.26em] backdrop-blur-sm">
                      35mm
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Interactive skills */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "UI/UX",
                    "Python",
                    "MongoDB",
                    "Tailwind CSS",
                    
                  ].map((skill, index) => (
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
                {socialLinks.map(({ href, icon: Icon, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors duration-300 hover-scale "
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon className= "tilt-shaking"/>
                  </a>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-highlight/20 rounded-full  animate-float" />
              <div
                className="absolute bottom-30 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float  justify-center items-center"
                style={{ animationDelay: "1s" }}
              />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={() => scrollToSection("about")}>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center cursor-pointer z-20">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2  animate-scroll-indicator z-20"  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
