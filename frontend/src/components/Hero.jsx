import { ArrowUpRight } from 'lucide-react'
import heroVideo from '../assets/Truck_moving_on_road_animation_202606291102.mp4'

export default function Hero({ heroRef, setInquiryModalOpen }) {
  return (
    <header className="hero-section" ref={heroRef}>
      <div className="hero-video-bg">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
      </div>

      <div className="container" style={{ zIndex: 10 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span style={{ display: 'block' }}>Driven Vigilant</span>
            <span style={{ display: 'block' }}>Mobility Service</span>
            <span style={{ display: 'block' }}>And Security</span>
          </h1>
          
          <p className="hero-description">
            DVMS is a high-performance fleet intelligence platform engineered to maximize operational visibility, driver compliance safety, and telemetry accountability. Built on advanced cyber-physical security protocols.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => setInquiryModalOpen(true)} className="btn-primary">
              Deploy Platform Demo
            </button>
            <a href="#services" className="btn-secondary">
              Explore Solutions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
