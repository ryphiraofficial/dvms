import { ArrowRight } from 'lucide-react'
import { serviceDetails } from '../constants/data'
import servicesTelemetryHud from '../assets/services_telemetry_hud.png'

export default function Services({ servicesRef, setActiveServiceTab }) {
  return (
    <section id="services" ref={servicesRef} style={{ padding: '120px 0', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="services-split-layout">
          {/* Left Column: Title, Subtitle, and Telemetry Image */}
          <div className="services-left-col">
            <div>
              <span className="section-tag">Solutions & Tech</span>
              <h2 className="section-title" style={{ marginBottom: '24px', fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
                Intelligence engineered for complex operations.
              </h2>
              {/* <p className="section-subtitle" style={{ maxWidth: '480px', marginBottom: '0' }}>
                Every asset is monitored, logged, and optimized in real-time, backed by edge-computing diagnostics and insulated routing.
              </p> */}
            </div>

            <div className="services-image-wrapper">
              <img 
                src={servicesTelemetryHud} 
                alt="DVMS Telemetry HUD Interface" 
              />
            </div>
          </div>

          {/* Right Column: Stack of Interactive Service Cards */}
          <div className="services-list-column">
            {serviceDetails.map((service, index) => (
              <div 
                key={service.id} 
                className="service-row-card"
                onClick={() => setActiveServiceTab(service)}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="service-row-num">0{index + 1}</span>
                  <div className="service-row-content">
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="service-row-arrow">
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginRight: '4px', textTransform: 'uppercase', opacity: 0.6 }}>Specs</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
