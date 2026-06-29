import { useState } from 'react'
import { X, Shield } from 'lucide-react'

export default function InquiryModal({ inquiryModalOpen, setInquiryModalOpen, handleSubmit }) {
  const [threatLevel, setThreatLevel] = useState('Low Profile')

  if (!inquiryModalOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}
    onClick={() => setInquiryModalOpen(false)}>
      <div style={{
        width: '100%',
        maxWidth: '550px',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.1)',
        overflowY: 'auto'
      }}
      onClick={(e) => e.stopPropagation()}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-light)' }}>INQUIRY REGISTRY</span>
            <button onClick={() => setInquiryModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
              <X size={20} />
            </button>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 300, marginBottom: '20px' }}>Initiate Tactical Consultation</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '40px' }}>
            Please fill in the secure parameters below. Once received, our operations manager will establish contact on your specified secure line.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="form-group">
              <label className="form-label">Client / Entity Name</label>
              <input required type="text" className="form-input" placeholder="e.g. Ambassador Sterling" />
            </div>
            <div className="form-group">
              <label className="form-label">Pre-Selected Threat Level</label>
              <select 
                value={threatLevel} 
                onChange={(e) => setThreatLevel(e.target.value)}
                className="form-input" 
                style={{ appearance: 'none', WebkitAppearance: 'none', borderRadius: 0 }}
              >
                <option value="Low Profile">Low Profile (Standard protection)</option>
                <option value="Moderate">Moderate (Reinforced guards)</option>
                <option value="High">High Risk (Full armored motorcade)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Secure Return Channel</label>
              <input required type="text" className="form-input" placeholder="Encrypted email, phone, or secure pager" />
            </div>
            <div className="form-group">
              <label className="form-label">Special Operations Notes</label>
              <textarea rows={3} className="form-input" placeholder="Specify any flight numbers, cargo volume, or close security needs..." style={{ resize: 'none' }}></textarea>
            </div>

            <button type="submit" className="form-submit-btn" style={{ width: '100%', marginTop: '20px' }}>
              Encrypt & Dispatch Briefing
            </button>
          </form>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', marginTop: '40px' }}>
          <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={12} /> Transmission is protected by AES-256 tactical encryption.
          </p>
        </div>
      </div>
    </div>
  )
}
