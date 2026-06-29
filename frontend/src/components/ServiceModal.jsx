import { X } from 'lucide-react'

export default function ServiceModal({ activeServiceTab, setActiveServiceTab, setInquiryModalOpen }) {
  if (activeServiceTab === null) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}
    onClick={() => setActiveServiceTab(null)}>
      <div style={{
        width: '100%',
        maxWidth: '700px',
        backgroundColor: '#ffffff',
        border: '1px solid var(--border)',
        padding: '50px',
        position: 'relative',
        boxShadow: '0 30px 90px rgba(0,0,0,0.15)'
      }}
      onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={() => setActiveServiceTab(null)} 
          style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
        >
          <X size={20} />
        </button>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-light)', display: 'block', marginBottom: '16px', letterSpacing: '0.15em' }}>
          PROTOCOL MANUAL // SECTION 0{activeServiceTab.id + 1}
        </span>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 300, marginBottom: '24px' }}>
          {activeServiceTab.title}
        </h2>

        <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
          {activeServiceTab.longDesc}
        </p>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '24px', marginBottom: '32px' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text)', marginBottom: '16px' }}>
            Operational Protocols
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {activeServiceTab.protocols.map((proto, i) => (
              <li key={i} style={{ fontSize: '14px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%' }}></div>
                {proto}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Operational Span</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginTop: '4px', display: 'block' }}>{activeServiceTab.duration}</span>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Vetting & Compliance</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginTop: '4px', display: 'block' }}>{activeServiceTab.certifications}</span>
          </div>
        </div>

        <button 
          onClick={() => {
            setInquiryModalOpen(true)
            setActiveServiceTab(null)
          }}
          style={{
            width: '100%',
            marginTop: '40px',
            padding: '16px',
            border: '1px solid #000',
            backgroundColor: 'transparent',
            color: '#000',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          className="service-modal-btn"
        >
          Inquire About This Solution
        </button>
      </div>
    </div>
  )
}
