import { Menu, X } from 'lucide-react'

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, setInquiryModalOpen }) {
  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#" className="logo">
          DVMS
        </a>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
          <li><a href="#configurator" onClick={() => setMobileMenuOpen(false)}>Configurator</a></li>
          <li><a href="#ethos" onClick={() => setMobileMenuOpen(false)}>Pillars</a></li>
          <li><a href="#divisions" onClick={() => setMobileMenuOpen(false)}>Divisions</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* <button onClick={() => setInquiryModalOpen(true)} className="nav-action">
            Inquire
          </button> */}
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
