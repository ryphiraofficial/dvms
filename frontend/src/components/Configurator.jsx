import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Configurator({ configWidgetRef }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Desktop/Laptop View: Pinned Scroll-Sweep
      mm.add("(min-width: 769px)", () => {
        const sweepTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.sweep-section-wrapper',
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress;
              document.querySelector('.t-node-1')?.classList.toggle('active', p >= 0.1);
              document.querySelector('.t-node-2')?.classList.toggle('active', p >= 0.35);
              document.querySelector('.t-node-3')?.classList.toggle('active', p >= 0.6);
              document.querySelector('.t-node-4')?.classList.toggle('active', p >= 0.85);
            }
          }
        });

        sweepTimeline.fromTo('.sweep-line-active',
          { scaleX: 0 },
          { scaleX: 1, ease: 'none', duration: 1 }
        );

        sweepTimeline.fromTo('.t-card-1, .t-node-1', 
          { opacity: 0, x: 50, scale: 0.96 }, 
          { opacity: 1, x: 0, scale: 1, duration: 0.15 }, 
          '0.1'
        );

        sweepTimeline.fromTo('.t-card-2, .t-node-2', 
          { opacity: 0, x: 50, scale: 0.96 }, 
          { opacity: 1, x: 0, scale: 1, duration: 0.15 }, 
          '0.35'
        );

        sweepTimeline.fromTo('.t-card-3, .t-node-3', 
          { opacity: 0, x: 50, scale: 0.96 }, 
          { opacity: 1, x: 0, scale: 1, duration: 0.15 }, 
          '0.6'
        );

        sweepTimeline.fromTo('.t-card-4, .t-node-4', 
          { opacity: 0, x: 50, scale: 0.96 }, 
          { opacity: 1, x: 0, scale: 1, duration: 0.15 }, 
          '0.85'
        );
      });

      // Mobile/Tablet View: Keep visible
      mm.add("(max-width: 768px)", () => {
        gsap.set('.sweep-card', { opacity: 1, x: 0, scale: 1 });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Styles Injection */}
      <style>{styles}</style>

      {/* --- Pinned Scroll-Sweep Section --- */}
      <section ref={configWidgetRef} id="configurator" className="sweep-section-wrapper">
        <div className="sweep-sticky-container">
          
          {/* Header */}
          <div className="container sweep-header-container">
            <span className="section-tag">System Operations</span>
            <h2 className="section-title">
              Telemetry Execution Pipeline
            </h2>
          </div>

          {/* Horizontal line track system */}
          <div className="sweep-line-track-container">
            {/* The background track line */}
            <div className="sweep-line-track"></div>
            {/* The active black line drawing left-to-right */}
            <div className="sweep-line-active"></div>
            
            {/* Connection Node points mapped directly to card columns */}
            <div className="container relative h-full">
              <div className="sweep-nodes-wrapper">
                <span className="sweep-node t-node-1"></span>
                <span className="sweep-node t-node-2"></span>
                <span className="sweep-node t-node-3"></span>
                <span className="sweep-node t-node-4"></span>
              </div>
            </div>
          </div>

          {/* Equal gap cards container */}
          <div className="container relative h-full">
            <div className="sweep-cards-grid">
              
              {/* Card 1 */}
              <div className="sweep-card t-card-1">
                <div className="card-number">Phase 01</div>
                <h4 className="card-heading">Signal Ingest</h4>
                <p className="card-description">
                  Real-time synchronization begins with continuous satellite and telemetry network handshakes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="sweep-card t-card-2">
                <div className="card-number">Phase 02</div>
                <h4 className="card-heading">Packet Audit</h4>
                <p className="card-description">
                  Incoming data sequences are processed at edge-nodes and cataloged inside cryptographically signed files.
                </p>
              </div>

              {/* Card 3 */}
              <div className="sweep-card t-card-3">
                <div className="card-number">Phase 03</div>
                <h4 className="card-heading">Risk Profiler</h4>
                <p className="card-description">
                  Predictive modules categorize fleet trends, flags anomalies, and measures physical infrastructure stressors.
                </p>
              </div>

              {/* Card 4 */}
              <div className="sweep-card t-card-4">
                <div className="card-number">Phase 04</div>
                <h4 className="card-heading">Active Corridors</h4>
                <p className="card-description">
                  Validated operations are dispatched along secure corridors with automated remote monitoring protocols.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// Minimal High-Contrast White and Black styles specifically for the Sweep Section
const styles = `
.sweep-section-wrapper {
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Space Mono', 'Fira Code', monospace;
  --bg: #ffffff;
  --bg-offset: #f0f2f5;
  --text: #0d0d0d;
  --text-muted: #2d2d2d;
  --text-light: #5a5a5a;
  --border: #e2e4e8;
  --primary-accent: #000000;
  
  background-color: var(--bg);
  position: relative;
  height: 100vh; /* Managed by ScrollTrigger pin */
}

.relative {
  position: relative;
}

.h-full {
  height: 100%;
}

.sweep-sticky-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sweep-header-container {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 10;
}

.sweep-header-container .section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-light);
  margin-bottom: 12px;
}

.sweep-header-container .section-title {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 300;
  color: var(--text);
  margin: 0;
}

/* Line container setup centered behind the cards */
.sweep-line-track-container {
  position: absolute;
  top: 55%;
  left: 0;
  width: 100%;
  height: 24px;
  transform: translateY(-50%);
  z-index: 1;
}

/* Background static track line */
.sweep-line-track {
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 2px;
  background-color: var(--border);
  transform: translateY(-50%);
}

/* Drawing active black connecting line */
.sweep-line-active {
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 2px;
  background-color: var(--primary-accent);
  transform: translateY(-50%);
  transform-origin: left center;
  scale: 0 1; /* Scrubbed dynamically with scaleX from 0 to 1 */
}

/* Horizontal Nodes Wrapper */
.sweep-nodes-wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  transform: translateY(-50%);
  z-index: 2;
}

/* Node indicator dot */
.sweep-node {
  width: 12px;
  height: 12px;
  background-color: var(--bg);
  border: 2px solid var(--border);
  border-radius: 50%;
  justify-self: center;
  align-self: center;
  transform: scale(1);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 0 5px var(--bg);
  z-index: 5;
}

/* Highlight node when line passes over */
.sweep-node.active {
  background-color: var(--primary-accent);
  border-color: var(--primary-accent);
  transform: scale(1.4);
  box-shadow: 0 0 0 5px var(--bg), 0 0 15px rgba(0, 0, 0, 0.15);
}

/* Cards Grid Alignment */
.sweep-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  position: absolute;
  top: 55%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  align-items: stretch;
  z-index: 3;
}

@media (max-width: 900px) {
  .sweep-cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    position: relative;
    top: auto;
    transform: none;
    padding: 15vh 0;
  }
}

/* High-Contrast Minimal Cards with White backgrounds to cover connection line tracks behind them */
.sweep-card {
  background-color: var(--bg);
  border: 1px solid var(--border);
  padding: 40px 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 260px;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
}

.sweep-card:hover {
  border-color: var(--primary-accent);
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

.card-number {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.card-heading {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
  color: var(--text);
}

.card-description {
  font-family: var(--font-display);
  font-size: 13.5px;
  font-weight: 450;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .sweep-section-wrapper {
    height: auto !important;
  }
  .sweep-sticky-container {
    height: auto !important;
    overflow: visible !important;
    padding: 80px 0 !important;
  }
  .sweep-header-container {
    position: relative !important;
    top: 0 !important;
    margin-bottom: 40px !important;
    padding: 0 24px !important;
  }
  .sweep-line-track-container, .sweep-nodes-wrapper {
    display: none !important;
  }
  .sweep-cards-grid {
    position: relative !important;
    top: 0 !important;
    transform: none !important;
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    padding: 0 24px !important;
  }
}
`;
