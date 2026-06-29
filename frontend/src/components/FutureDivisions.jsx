export default function FutureDivisions() {
  return (
    <section id="divisions" style={{ borderBottom: '1px solid var(--border-light)', padding: '120px 0', backgroundColor: 'var(--bg-offset)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2 className="section-title">Evolving the Ecosystem.</h2>
          <p className="section-subtitle">
            Building the future of secure telemetry. We are scaling our platforms to address next-generation cybersecurity challenges and professional fleet education.
          </p>
        </div>

        <div className="divisions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Division 1: Cybersecurity */}
          <div className="division-card" style={{ border: '1px solid var(--border)', padding: '50px', backgroundColor: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', border: '1px solid var(--border-light)', padding: '4px 10px' }}>
                Future Division
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-light)' }}>EST. Q4 2026</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>
              Cybersecurity
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '30px' }}>
              Shielding vehicle-to-everything (V2X) telemetry streams, hardening hardware firmware, and securing over-the-air (OTA) updates against emerging digital intrusion threats. Our dedicated security division will offer end-to-end telemetry insulation.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></span> V2X Telemetry Cryptography</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></span> Firmware Anti-Tampering</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></span> OTA Insulated Delivery</li>
            </ul>
          </div>

          {/* Division 2: Academy */}
          <div className="division-card" style={{ border: '1px solid var(--border)', padding: '50px', backgroundColor: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', border: '1px solid var(--border-light)', padding: '4px 10px' }}>
                Ecosystem Initiative
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-light)' }}>EST. Q2 2027</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>
              DVMS Academy
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '30px' }}>
              An educational framework and certification program designed to train fleet managers, telemetry analysts, and professional operators on digital threat management, defensive telematics, and compliance reporting.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></span> Certified Telemetry Specialist</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></span> Threat Assessment Training</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></span> Compliance Standard Auditing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
