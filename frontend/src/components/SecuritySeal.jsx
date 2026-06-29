import harshDrivingAlert from '../assets/harsh_driving_alert.png'

export default function SecuritySeal() {
  return (
    <section style={{ padding: '100px 0', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div className="reveal-fill-card" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="fill-status-badge">Operational Clearance: Active</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, margin: '10px 0 0', textTransform: 'uppercase', lineHeight: 1.2 }}>
              Secure Operations Protocol Certified
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
              DVMS telemetry pipelines are audited under strict data privacy and transport safety compliance standards. All tracking streams, route analytics, and security audits run over fully insulated cyber corridors.
            </p>
            <div style={{ display: 'flex', gap: '40px', marginTop: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', display: 'block', opacity: 0.6 }}>ENCRYPTION LEVEL</span>
                <span style={{ fontSize: '15px', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>AES-256 GCM</span>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', display: 'block', opacity: 0.6 }}>CLEARANCE RATING</span>
                <span style={{ fontSize: '15px', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>Level-3 Restricted</span>
              </div>
            </div>
          </div>

          <div className="reveal-fill-image-container" style={{ 
            border: '1px solid var(--border-light)', 
            backgroundColor: '#000', 
            overflow: 'hidden', 
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            transition: 'border-color 0.8s ease'
          }}>
            <img 
              src={harshDrivingAlert} 
              alt="Active Safety Telemetry" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
