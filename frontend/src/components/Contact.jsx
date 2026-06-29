import { Phone } from 'lucide-react'

const InstagramIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export default function Contact({ contactRef }) {
  return (
    <section id="contact" ref={contactRef} className="contact-section" style={{ backgroundColor: 'var(--bg-offset)', borderBottom: 'none' }}>
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Column: Info & Tagline */}
          <div className="contact-info">
            <div>
              <span className="section-tag" style={{ color: 'var(--text-light)', letterSpacing: '0.15em', display: 'inline-block', marginBottom: '16px' }}>Uplink Channels</span>
              <h2 className="section-title" style={{ marginBottom: '24px', fontSize: 'clamp(32px, 3.5vw, 44px)' }}>
                Begin Operational Briefing.
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '440px', fontSize: '15px', lineHeight: '1.6' }}>
                For telemetry configuration audits, platform integrations, or secure command access deployment, connect with our network operations team.
              </p>
            </div>
          </div>

          {/* Right Column: Contact details in a clean horizontal flow */}
          <div className="contact-details">
            
            {/* Phone Detail Item */}
            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <Phone size={16} />
              </div>
              <div className="contact-detail-text">
                <h4 style={{ margin: 0, fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>Network Command Desk</h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '16px', fontWeight: '500', color: 'var(--text)' }}>+91 97474 56131</p>
              </div>
            </div>

            {/* Instagram Link (Logo Only) */}
            <a 
              href="https://www.instagram.com/dvms.india/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-icon-wrapper"
              style={{ color: 'var(--text)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--text)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <InstagramIcon size={16} />
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
