export default function FleetShowcase({ fleetRef }) {
  return (
    <section id="fleet" className="fleet-horizontal-section" ref={fleetRef}>
      <div className="fleet-horizontal-container">
        <div className="container" style={{ width: '100%', marginBottom: '20px' }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <h2 className="section-title">Telemetry Hardware Nodes.</h2>
            <p className="section-subtitle">
              Industrial-grade edge computing modules mapping real-time diagnostics directly onto our secure cloud platform.
            </p>
          </div>
        </div>

        <div className="fleet-horizontal-row">
          {/* Vehicle 1 */}
          <div className="fleet-horizontal-card">
            <span className="fleet-class">High-frequency CAN-bus transceiver</span>
            <h3 className="fleet-title">OBD-III Node (HSM V2)</h3>
            
            <div className="fleet-img-container">
              <svg viewBox="0 0 100 60" width="160" height="80" stroke="#000000" strokeWidth="0.8" fill="none" style={{ opacity: 0.85 }}>
                <rect x="15" y="15" width="70" height="30" rx="4" />
                <path d="M25 15 L25 10 L35 10 L35 15" />
                <path d="M65 15 L65 10 L75 10 L75 15" />
                <circle cx="50" cy="30" r="6" />
                <line x1="44" y1="30" x2="56" y2="30" />
                <line x1="50" y1="24" x2="50" y2="36" />
              </svg>
            </div>

            <div className="fleet-specs">
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Capacity</span>
                <span className="fleet-spec-value">250 parameters/sec</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Cryptography</span>
                <span className="fleet-spec-value">HSM Shielded (AES-256)</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Connection</span>
                <span className="fleet-spec-value">Dual LTE/3G Failover</span>
              </div>
            </div>
          </div>

          {/* Vehicle 2 */}
          <div className="fleet-horizontal-card">
            <span className="fleet-class">Vehicle-to-Everything transmitter</span>
            <h3 className="fleet-title">V2X Transceiver Hub</h3>
            
            <div className="fleet-img-container">
              <svg viewBox="0 0 100 60" width="160" height="80" stroke="#000000" strokeWidth="0.8" fill="none" style={{ opacity: 0.85 }}>
                <rect x="25" y="20" width="50" height="25" rx="2" />
                <line x1="50" y1="20" x2="50" y2="5" />
                <circle cx="50" cy="5" r="2" />
                <path d="M42 12 Q50 8 58 12" />
                <path d="M38 8 Q50 2 62 8" />
              </svg>
            </div>

            <div className="fleet-specs">
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Capacity</span>
                <span className="fleet-spec-value">Mesh Grid Transmissions</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Cryptography</span>
                <span className="fleet-spec-value">End-to-End Encrypted</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Connection</span>
                <span className="fleet-spec-value">Satcom/LTE Satellite Link</span>
              </div>
            </div>
          </div>

          {/* Vehicle 3 */}
          <div className="fleet-horizontal-card">
            <span className="fleet-class">Edge AI Monitoring Node</span>
            <h3 className="fleet-title">Cabin Sentinel Cam</h3>
            
            <div className="fleet-img-container">
              <svg viewBox="0 0 100 60" width="160" height="80" stroke="#000000" strokeWidth="0.8" fill="none" style={{ opacity: 0.85 }}>
                <circle cx="50" cy="30" r="18" />
                <circle cx="50" cy="30" r="8" fill="#000" />
                <rect x="42" y="10" width="16" height="5" />
              </svg>
            </div>

            <div className="fleet-specs">
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Capacity</span>
                <span className="fleet-spec-value">On-device visual AI</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Cryptography</span>
                <span className="fleet-spec-value">Local Vector Processing</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Connection</span>
                <span className="fleet-spec-value">Encrypted WLAN uplink</span>
              </div>
            </div>
          </div>

          {/* Vehicle 4 */}
          <div className="fleet-horizontal-card">
            <span className="fleet-class">Independent asset locating beacon</span>
            <h3 className="fleet-title">Asset Tracker Mini</h3>
            
            <div className="fleet-img-container">
              <svg viewBox="0 0 100 60" width="160" height="80" stroke="#000000" strokeWidth="0.8" fill="none" style={{ opacity: 0.85 }}>
                <rect x="30" y="15" width="40" height="30" rx="8" />
                <rect x="45" y="25" width="10" height="10" />
              </svg>
            </div>

            <div className="fleet-specs">
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Capacity</span>
                <span className="fleet-spec-value">5-Year Battery Lifespan</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Cryptography</span>
                <span className="fleet-spec-value">Obfuscated Hashing</span>
              </div>
              <div className="fleet-spec-row">
                <span className="fleet-spec-label">Connection</span>
                <span className="fleet-spec-value">Ultra-narrowband IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
