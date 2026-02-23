import {
  AlarmClock,
  Camera,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "prathamnsawant@gmail.com",
    link: "mailto:prathamnsawant@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+358 45 1377916",
    link: "tel:+358451377916",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nurmes, Finland",
    link: "https://www.google.com/maps/place/75500+Nurmes/@63.5445932,29.1264699,15z/data=!3m1!4b1!4m6!3m5!1s0x469cd3f0939a3735:0x18f931702d191435!8m2!3d63.5418854!4d29.1395699!16zL20vMDNjMTJr?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: AlarmClock,
    title: "Availability",
    value: "Mon - Fri, 8AM - 6PM EET",
  },
];

const socialLinks = [
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/pratham-sawant-613467251" },
  { icon: Github, name: "GitHub", url: "https://github.com/PrathamSawantCoder" },
  // { icon: Twitter, name: "Twitter", url: "https://x.com/sawant_pra84212" },
  { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/pratham_sawant2004/" },
];

const formKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: formKey,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const contactRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot field
    if (honeypot) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use the standard form submission approach as per Web3Forms documentation
      const formData = new FormData(e.target);
      console.log("FormData entries:", Array.from(formData.entries()));
      console.log("Access key from FormData:", formData.get("access_key"));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          access_key: formKey,
        });
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case "success":
        return {
          title: "Message Sent Successfully!",
          message:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
          type: "success",
        };
      case "error":
        return {
          title: "Something Went Wrong",
          message:
            "Please try again or contact me directly at prathamnsawant@gmail.com",
          type: "error",
        };
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="section bg-linear-to-br from-background via-background to-surface/50"
    >
      <div className="container ">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact form */}
          <div className="scroll-reveal">
            <div className="glass-glow rounded-3xl p-6 sm:p-8 w-full">

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                {/* Hidden access key field for Web3Forms */}
                <input type="hidden" name="access_key" value={formKey} />
                
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
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
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
                  className="w-full gradient-bg text-white py-4 rounded-lg font-medium 
                  disabled:opacity-50 disabled:cursor-not-allowed 
                  transition-all duration-300 cursor-pointer 
                  hover:scale-[1.03] active:scale-[0.97]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Status message */}
                {getStatusMessage() && (
                  <div
                    className={`p-4 rounded-lg ${
                      getStatusMessage().type === "success"
                        ? "bg-green-500/20 border border-green-500/50 text-green-400"
                        : "bg-red-500/20 border border-red-500/50 text-red-400"
                    }`}
                  >
                    <div className="font-medium">
                      {getStatusMessage().title}
                    </div>
                    <div className="text-sm mt-1">
                      {getStatusMessage().message}
                    </div>
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
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Contact <span className="gradient-text">Information</span>
                </h3>

                <div className="space-y-6">
                  {contactInfo.map(
                    ({ icon: Icon, link, title, value }, index) => (
                      <a
                        key={index}
                        href={link}
                        className="flex items-center gap-4 md:p-4 rounded-xl hover:bg-surface transition-all duration-300"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="w-10 md:w-15 h-10 md:h-15 bg-primary/20 rounded-xl flex items-center justify-center text-xl">
                          <Icon className= "tilt-shaking"/>
                        </div>
                        <div>
                          <div className="font-medium">{title}</div>
                          <div className="text-muted-foreground">{value}</div>
                        </div>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="scroll-reveal">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Connect <span className="gradient-text">With Me</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ icon: Icon, url, name }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid md:flex items-center gap-3 p-4 rounded-xl hover:bg-surface transition-all duration-300 hover-scale"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 md:w-15 md:h-15 bg-primary/20 rounded-lg flex items-center justify-center text-lg">
                        <Icon className= "tilt-shaking"/>
                      </div>
                      <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm text-muted-foreground">
                          Follow me
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick response info */}
            <div className="scroll-reveal">
              <div className="glass-glow rounded-3xl p-6 text-center">
                <div className="text-4xl mb-4 flex justify-center "><Zap className="w-8 h-8 text-primary"/></div>
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
  );
};

export default Contact;
