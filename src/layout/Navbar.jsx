import {Button} from "@/components/Button"
import {Menu, X} from "lucide-react"
import { useState, useEffect } from 'react'
import { scrollToSection } from "@/utils/scrollToSection"



const navLinks = [
        {
            id: 1,
            href: '#home',
            text: 'Home'
        },
        {
            id: 2,
            href: '#about',
            text: 'About'
        },
        {
            id: 3,
            href: '#experience',
            text: 'Experience'
        },
        {
            id: 4,
            href: '#projects',
            text: 'Projects'
        },
        // {
        //     id: 5,
        //     href: '#testimonials',
        //     text: 'Testimonials'
        // },
        {
            id: 6,
            href: '#contact',
            text: 'Contact'
        }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // NAVBAR BLUR
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
            ? 'bg-surface/90 backdrop-blur-lg py-3 shadow-lg'
            : 'bg-transparent py-5'
    }`}>
        <nav className='container mx-auto px-6 flex items-center justify-between'>
            <button onClick={() => scrollToSection('home')} className='text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300 flex items-center gap-2 cursor-pointer'>
                <span className='text-primary text-2xl animate-pulse-glow animate-subtle-bounce' >.</span>
                PRATHAM
            </button>


            {/* Desktop Nav */}
            <div className='hidden md:flex items-center gap-1'>
                <div className='glass rounded-full px-4 py-2 flex items-center gap-2 '>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-full 
                            hover:text-primary ${
                                isScrolled
                                    ? 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                            }`}
                            
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
            <div className='hidden md:block items-center gap-1'>
                <Button size="sm" className="hover-lift" onClick={() =>scrollToSection('contact')}>
                    Contact Me
                </Button>
            </div>

            {/* Mobile Nav */}
            <button
                className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-surface transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ?
                    <X size={24} className="text-primary" /> :
                    <Menu size={24} className="text-muted-foreground" />
                }
            </button>

        </nav>
        
        {/* Mobile Nav Menu */}
        {isMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`text-lg font-medium transition-all duration-300 py-2 ${
                                isScrolled
                                    ? 'text-muted-foreground hover:text-primary'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {link.text}
                        </a>
                    ))}
                    <Button className="mt-4 w-full hover-lift" onClick={() =>scrollToSection('contact')}>
                        Contact Me
                    </Button>
                </div>
            </div>
        )}
    </header>
  )
}

export default Navbar