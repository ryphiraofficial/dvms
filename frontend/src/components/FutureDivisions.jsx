export default function FutureDivisions() {
  return (
    <section id="divisions" className="divisions-section" style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--bg-offset)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2 className="section-title">Evolving the Ecosystem.</h2>
          <p className="section-subtitle">
            Building the future of secure telemetry. We are scaling our platforms to address next-generation cybersecurity challenges and professional fleet education.
          </p>
        </div>

        <div className="divisions-grid">
          {/* Division 1: Cybersecurity */}
          <div className="division-card">
            <div className="division-card-header">
              <span className="division-tag">Future Division</span>
              <span className="division-date">EST. Q4 2026</span>
            </div>
            <h3 className="division-title">Cybersecurity</h3>
            <p className="division-description">
              Shielding vehicle-to-everything (V2X) telemetry streams, hardening hardware firmware, and securing over-the-air (OTA) updates against emerging digital intrusion threats. Our dedicated security division will offer end-to-end telemetry insulation.
            </p>
            <ul className="division-list">
              <li><span className="division-bullet"></span> V2X Telemetry Cryptography</li>
              <li><span className="division-bullet"></span> Firmware Anti-Tampering</li>
              <li><span className="division-bullet"></span> OTA Insulated Delivery</li>
            </ul>
          </div>

          {/* Division 2: DVMS Edge Labs */}
          <div className="division-card">
            <div className="division-card-header">
              <span className="division-tag">Hardware Initiative</span>
              <span className="division-date">EST. Q2 2027</span>
            </div>
            <h3 className="division-title">DVMS Edge Labs</h3>
            <p className="division-description">
              Developing tamper-proof, military-grade hardware telemetry modules and secure diagnostic plug-ins designed to operate reliably in high-stress tactical and commercial transit environments.
            </p>
            <ul className="division-list">
              <li><span className="division-bullet"></span> Cryptographic Security Chips</li>
              <li><span className="division-bullet"></span> Ruggedized Diagnostic Modules</li>
              <li><span className="division-bullet"></span> Edge Fail-Safe Firmware</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
