import Navbar from "../layout/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Testimonials from "../sections/Testimonials"
import Contact from "../sections/Contact"
import useScrollAnimation from "../hooks/useScrollAnimation"

const Home = () => {
  useScrollAnimation()

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <div id="#navbar"><Navbar/></div>
      <main>
        <div id="#hero"><Hero/></div>
        <div id="#about"><About/></div>
        <div id="#experience"><Experience/></div>
        <div id="#projects"><Projects/></div>
        <div id="#testimonials"><Testimonials/></div>
        <div id="#contact"><Contact/></div>
      </main>
    </div>
  )
}

export default Home