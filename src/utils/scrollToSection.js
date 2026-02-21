
export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = 0;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };