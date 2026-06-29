import React, { useEffect, useState } from 'react';

export default function Ethos({ ethosRef }) {
  const [activeTab, setActiveTab] = useState('D');

  // Load GSAP & ScrollTrigger and initialize animations
  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initializeAnimations = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');

        const gsap = window.gsap;
        if (!gsap || !window.ScrollTrigger) return;

        gsap.registerPlugin(window.ScrollTrigger);

        // Split Ethos Pillar Letter-Fill Triggers (Scrubbed top-to-bottom)
        const animationD = gsap.fromTo('.dvms-fill-d', 
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: '.ethos-point-1',
              start: 'top 50%',
              end: 'bottom 50%',
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.1 && self.progress < 0.9) setActiveTab('D');
              }
            }
          }
        );

        const animationV = gsap.fromTo('.dvms-fill-v', 
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: '.ethos-point-2',
              start: 'top 50%',
              end: 'bottom 50%',
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.1 && self.progress < 0.9) setActiveTab('V');
              }
            }
          }
        );

        const animationM = gsap.fromTo('.dvms-fill-m', 
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: '.ethos-point-3',
              start: 'top 50%',
              end: 'bottom 50%',
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.1 && self.progress < 0.9) setActiveTab('M');
              }
            }
          }
        );

        // Optimized final trigger: reaches 100% fill perfectly when scrolled to the end of the content.
        const animationS = gsap.fromTo('.dvms-fill-s', 
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: '.ethos-point-4',
              start: 'top 60%',
              end: 'bottom bottom',
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.1) setActiveTab('S');
              }
            }
          }
        );

        // Pin the right column containing the letters
        const pinAnimation = window.ScrollTrigger.create({
          trigger: '.ethos-split-container',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.ethos-sticky-right',
          pinSpacing: false
        });

        // Refresh on completion to ensure accurate calculations
        window.ScrollTrigger.refresh();

        return () => {
          animationD.scrollTrigger?.kill();
          animationV.scrollTrigger?.kill();
          animationM.scrollTrigger?.kill();
          animationS.scrollTrigger?.kill();
          pinAnimation?.kill();
        };
      } catch (err) {
        console.error('Failed to load GSAP dependencies: ', err);
      }
    };

    initializeAnimations();
  }, []);

  return (
    <div className="app-wrapper">
      {/* Styles Injection */}
      <style>{styles}</style>

      {/* --- Ethos Section --- */}
      <section id="ethos" ref={ethosRef} className="ethos-section-wrapper">
        <div className="container">
          <div className="ethos-split-container">
            {/* Left side scrolling content */}
            <div className="ethos-scroll-left">
              <div className="ethos-scroll-block ethos-point-1">
                <span className="ethos-letter-tag">D</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Driven Visibility
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, maxWidth: '500px' }}>
                  We capture sub-second diagnostic frames from the engine, location grids, and cabin status, maintaining absolute visibility under any operational circumstance. Every path is mapped and simulated in real-time.
                </p>
              </div>

              <div className="ethos-scroll-block ethos-point-2">
                <span className="ethos-letter-tag">V</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Vigilant Safety
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, maxWidth: '500px' }}>
                  By actively profiling harsh acceleration, hard braking, and operator fatigue on edge AI modules, we enforce compliance guidelines and mitigate transit risk. Our predictive systems detect failures before they happen.
                </p>
              </div>

              <div className="ethos-scroll-block ethos-point-3">
                <span className="ethos-letter-tag">M</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Mobility Logistics
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, maxWidth: '500px' }}>
                  Dynamic asset routing, automated fleet dispatch, and live route playback. We optimize transited miles while ensuring that every vehicle is running on secure, vetted corridors.
                </p>
              </div>

              <div className="ethos-scroll-block ethos-point-4">
                <span className="ethos-letter-tag">S</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Secure Protocols
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, maxWidth: '500px' }}>
                  All communications and logs are bound by cryptographic hashing and telemetry scramblers. Diagnostic ports are fully insulated against physical and remote threats, ensuring under-the-radar operations.
                </p>
              </div>
            </div>

            {/* Right side fixed vertical DVMS letters */}
            <div className="ethos-sticky-right">
              <div className="dvms-letters-container">
                <div className="dvms-letter-wrapper">
                  <span className="dvms-letter-outline">D</span>
                  <span className="dvms-letter-fill dvms-fill-d">D</span>
                </div>
                <div className="dvms-letter-wrapper">
                  <span className="dvms-letter-outline">V</span>
                  <span className="dvms-letter-fill dvms-fill-v">V</span>
                </div>
                <div className="dvms-letter-wrapper">
                  <span className="dvms-letter-outline">M</span>
                  <span className="dvms-letter-fill dvms-fill-m">M</span>
                </div>
                <div className="dvms-letter-wrapper">
                  <span className="dvms-letter-outline">S</span>
                  <span className="dvms-letter-fill dvms-fill-s">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Minimal High-Contrast White and Black styles
const styles = `
:root {
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Space Mono', 'Fira Code', monospace;
  --bg: #ffffff;
  --text: #000000;
  --text-muted: #2d2d2d;
  --border: #e0e0e0;
  --border-light: #f5f5f5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-display);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Core Ethos Section Layout --- */
.ethos-section-wrapper {
  padding: 10vh 0;
  background-color: var(--bg);
}

.ethos-split-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  position: relative;
}

@media (max-width: 900px) {
  .ethos-split-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.ethos-scroll-left {
  display: flex;
  flex-direction: column;
}

.ethos-scroll-block {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  border-bottom: 1px solid var(--border-light);
}

.ethos-scroll-block:last-child {
  border-bottom: none;
  padding-bottom: 15vh; /* Gives comfortable extra breathing space at the end of scroll */
}

.ethos-scroll-block p {
  font-weight: 450 !important;
}

.ethos-sticky-right {
  position: sticky;
  top: 10vh;
  align-self: start;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

@media (max-width: 900px) {
  .ethos-sticky-right {
    position: relative;
    top: 0;
    height: auto;
    margin-bottom: 40px;
  }
}

.dvms-letters-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 100%;
}

.dvms-letter-wrapper {
  position: relative;
  display: inline-block;
  user-select: none;
}

.dvms-letter-outline {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vh, 150px);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px var(--border);
  line-height: 0.95;
  display: block;
}

.dvms-letter-fill {
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-display);
  font-size: clamp(80px, 14vh, 150px);
  font-weight: 900;
  color: var(--text);
  line-height: 0.95;
  display: block;
  clip-path: inset(0 0 100% 0); /* starts fully clipped/empty from top to bottom */
}

@media (max-width: 900px) {
  .dvms-letters-container {
    flex-direction: row;
    gap: 20px;
    height: auto;
    padding: 20px 0;
  }
  .dvms-letter-outline,
  .dvms-letter-fill {
    font-size: 70px;
    -webkit-text-stroke: 1.5px var(--border);
  }
}

.ethos-letter-tag {
  display: block;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 12px;
  text-transform: uppercase;
}
`;
