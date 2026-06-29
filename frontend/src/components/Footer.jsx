export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">DVMS<span></span></a>
            <p>DVMS is a premium fleet intelligence platform maximizing operational visibility, driver compliance safety, and telemetry accountability.</p>
          </div>
          
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Solutions</a></li>
              <li><a href="#configurator">Configurator</a></li>
              <li><a href="#fleet">Hardware</a></li>
              <li><a href="#ethos">Pillars</a></li>
              <li><a href="#divisions">Divisions</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Legal & Info</h4>
            <ul>
              <li><a href="#nda">Mutual NDA Protocols</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Disclosures</a></li>
              <li><a href="#clearance">Staff Compliance Log</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} DVMS. All rights reserved. All protocols active.</span>
          <span>Security Classification: Level-3 Restricted Information</span>
        </div>
      </div>
    </footer>
  )
}
