import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './App.css'

// Import modular components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Configurator from './components/Configurator'
import Ethos from './components/Ethos'
import FutureDivisions from './components/FutureDivisions'
import SecuritySeal from './components/SecuritySeal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InquiryModal from './components/InquiryModal'
import ServiceModal from './components/ServiceModal'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [activeServiceTab, setActiveServiceTab] = useState(null)



  // Refs for animations
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const ethosRef = useRef(null)
  const contactRef = useRef(null)
  const configWidgetRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Nav reveal logic
    let lastScrollY = window.scrollY
    const navElement = document.querySelector('nav')

    const handleScroll = () => {
      if (window.scrollY > 150) {
        if (window.scrollY > lastScrollY) {
          navElement.classList.add('nav-hidden')
        } else {
          navElement.classList.remove('nav-hidden')
        }
      } else {
        navElement.classList.remove('nav-hidden')
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    // GSAP ScrollTrigger Animations

    // 1. Hero Reveal
    const tl = gsap.timeline()
    tl.fromTo('.logo', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.nav-links li', { opacity: 0, y: -10 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .fromTo('.nav-action', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-title span', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: 'power4.out' }, '-=0.4')
      .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.8')
      .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')

    // 2. Hero ScrollTriggers (Desktop vs Mobile MatchMedia)
    let mm = gsap.matchMedia();

    // Desktop/Laptop View
    mm.add("(min-width: 769px)", () => {
      gsap.to('.hero-section', {
        scale: 0.96,
        transformOrigin: 'top center',
        borderRadius: '0 0 24px 24px',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      gsap.to('.hero-video-bg video', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      gsap.to('.hero-content', {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // Mobile View: Simplified Fade-out scroll trigger
    mm.add("(max-width: 768px)", () => {
      gsap.to('.hero-content', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // 3. Services Row Cards Entrance Animation (Alternating Sides with Stagger Delay)
    gsap.fromTo('.service-row-card',
      { 
        opacity: 0, 
        x: (i) => i % 2 === 0 ? -100 : 100 
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.services-list-column',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )









    // 7. Outline Text Scroll Reveal Fill
    const revealSpans = gsap.utils.toArray('.text-fill-word span')
    revealSpans.forEach((span) => {
      gsap.fromTo(span,
        { color: '#e0e0e0' },
        {
          color: '#0d0d0d',
          scrollTrigger: {
            trigger: span,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true
          }
        }
      )
    })

    // 8. Card Color Fill Trigger
    ScrollTrigger.create({
      trigger: '.reveal-fill-card',
      start: 'top 75%',
      onEnter: () => {
        const card = document.querySelector('.reveal-fill-card')
        if (card) card.classList.add('card-filled')
      },
      onLeaveBack: () => {
        const card = document.querySelector('.reveal-fill-card')
        if (card) card.classList.remove('card-filled')
      }
    })

    // 9. Division Cards Alternating Reveal with Stagger Delay
    gsap.fromTo('.division-card',
      { 
        opacity: 0, 
        x: (i) => i % 2 === 0 ? -80 : 80 
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.divisions-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    return () => {
      window.removeEventListener('scroll', handleScroll)
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you. Your inquiry has been secured and dispatched to the DVMS Command Center. An operations specialist will contact you on a secure line shortly.')
    setInquiryModalOpen(false)
  }

  return (
    <>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setInquiryModalOpen={setInquiryModalOpen}
      />

      <Hero
        heroRef={heroRef}
        setInquiryModalOpen={setInquiryModalOpen}
      />

      <Services
        servicesRef={servicesRef}
        setActiveServiceTab={setActiveServiceTab}
      />

      <Configurator
        configWidgetRef={configWidgetRef}
      />

      <section className="text-fill-container">
        <div className="container">
          <div className="text-fill-display">
            <span className="text-fill-word"><span>Visibility.</span></span>
            <span className="text-fill-word"><span>Safety.</span></span>
            <span className="text-fill-word"><span>Compliance.</span></span>
          </div>
        </div>
      </section>



      <Ethos
        ethosRef={ethosRef}
      />

      <FutureDivisions />

      <SecuritySeal />

      <Contact
        contactRef={contactRef}
      />

      <Footer />

      <InquiryModal
        inquiryModalOpen={inquiryModalOpen}
        setInquiryModalOpen={setInquiryModalOpen}
        handleSubmit={handleSubmit}
      />

      <ServiceModal
        activeServiceTab={activeServiceTab}
        setActiveServiceTab={setActiveServiceTab}
        setInquiryModalOpen={setInquiryModalOpen}
      />
    </>
  )
}

export default App
