import Link from 'next/link';
import type { CSSProperties } from 'react';

// ===== Style tokens =====
const ink = '#07070A';
const ink900 = '#0F0F15';
const ink800 = '#1A1A22';
const cream = '#F5F5F2';
const muted = 'rgba(245, 245, 242, 0.6)';
const mutedSoft = 'rgba(245, 245, 242, 0.4)';
const line = 'rgba(245, 245, 242, 0.1)';
const accent = '#BEF264';
const accentDark = '#84CC16';

// ===== Reusable styles =====
const container: CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 24px',
};

const eyebrow: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '12px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: accent,
  marginBottom: '20px',
};

const section: CSSProperties = {
  padding: '96px 0',
  borderTop: `1px solid ${line}`,
  position: 'relative',
};

const h2Display: CSSProperties = {
  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
  fontWeight: 800,
  letterSpacing: '-0.035em',
  lineHeight: 1.0,
  margin: 0,
};

const tagPill: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 500,
  borderRadius: '999px',
  border: `1px solid ${line}`,
  color: 'rgba(245, 245, 242, 0.85)',
};

const btnPrimary: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px 26px',
  borderRadius: '999px',
  background: accent,
  color: ink,
  fontWeight: 600,
  fontSize: '13px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
};

const btnGhost: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px 26px',
  borderRadius: '999px',
  border: `1px solid ${line}`,
  color: cream,
  fontWeight: 500,
  fontSize: '13px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, color 0.2s ease',
};

// ===== Page =====
export default function HomePage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '20px 0',
          background: 'rgba(7, 7, 10, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${line}`,
        }}
      >
        <div
          style={{
            ...container,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            aria-label="JFR Studios home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.04em',
            }}
          >
            <span style={{ color: cream }}>/JFR</span>
            <span style={{ color: accent }}>.</span>
            <span style={{ color: muted }}>studios</span>
          </Link>

          <nav
            aria-label="Primary"
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <a
              href="#services"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: cream,
                textDecoration: 'none',
              }}
            >
              Services
            </a>
            <a
              href="#work"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'upperface',
                fontWeight: 500,
                color: cream,
                textDecoration: 'none',
              }}
            >
              Work
            </a>
            <a
              href="#about"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: cream,
                textDecoration: 'none',
              }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: cream,
                textDecoration: 'none',
              }}
            >
              Contact
            </a>
          </nav>

          <a
            href="mailto:hello@jfrstudios.store"
            style={{
              ...btnGhost,
              padding: '10px 20px',
              fontSize: '12px',
            }}
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section
        style={{
          minHeight: '100vh',
          paddingTop: '160px',
          paddingBottom: '80px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Decorative orbs */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'rgba(190, 242, 100, 0.15)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(132, 204, 22, 0.1)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ ...container, position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: accent,
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                width: '8px',
                height: '8px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: accent,
                  opacity: 0.5,
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: accent,
                }}
              />
            </span>
            Available for new projects — 2026
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 7rem)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 0.95,
              margin: 0,
              maxWidth: '1200px',
            }}
          >
            <span style={{ display: 'block' }}>We craft digital</span>
            <span style={{ display: 'block' }}>
              <span style={{ color: accent }}>experiences</span>
            </span>
            <span style={{ display: 'block', color: mutedSoft }}>
              that ignite brands.
            </span>
          </h1>

          {/* Subtitle + CTA */}
          <div
            style={{
              marginTop: '56px',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)',
              gap: '48px',
              alignItems: 'end',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: muted,
                margin: 0,
                maxWidth: '560px',
              }}
            >
              From bold identities to immersive websites — JFR Studios is a
              digital studio for ambitious brands at pivotal moments of growth.
              We combine <span style={{ color: cream }}>strategy</span>,{' '}
              <span style={{ color: cream }}>creativity</span> and{' '}
              <span style={{ color: cream }}>technology</span> to move
              businesses forward.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#contact" style={btnPrimary}>
                Start a project →
              </a>
              <a href="#work" style={btnGhost}>
                See our work
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              marginTop: '96px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1px',
              background: line,
              border: `1px solid ${line}`,
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            {[
              { v: '40+', l: 'Projects shipped' },
              { v: '6 wks', l: 'Avg. delivery' },
              { v: '98%', l: 'Client retention' },
              { v: '15+', l: 'Industries served' },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  background: ink,
                  padding: '32px 24px',
                }}
              >
                <p
                  style={{
                    fontSize: '44px',
                    fontWeight: 700,
                    color: accent,
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {s.v}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: muted,
                    margin: '12px 0 0',
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section
        style={{
          padding: '48px 0',
          borderTop: `1px solid ${line}`,
          borderBottom: `1px solid ${line}`,
          background: ink900,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '48px',
            whiteSpace: 'nowrap',
            animation: 'marquee 30s linear infinite',
          }}
        >
          {[
            'Web Development',
            'Branding',
            'Social Media',
            'Graphic Design',
            'Strategy',
            'UI/UX',
            'Motion',
          ]
            .concat([
              'Web Development',
              'Branding',
              'Social Media',
              'Graphic Design',
              'Strategy',
              'UI/UX',
              'Motion',
            ])
            .map((item, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '48px',
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: mutedSoft,
                }}
              >
                {item}
                <span style={{ color: accent }}>✺</span>
              </span>
            ))}
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" style={section}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
              gap: '48px',
              marginBottom: '64px',
            }}
          >
            <p style={eyebrow}>/ What we do</p>
            <h2 style={h2Display}>
              Four disciplines.{' '}
              <span style={{ color: mutedSoft }}>One studio.</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px',
              background: line,
              border: `1px solid ${line}`,
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            {[
              {
                no: '01',
                title: 'Web Development',
                desc: 'Custom-coded websites and web applications. Next.js, React, performance-first builds that scale with your business.',
                tags: ['Next.js', 'React', 'TS', 'GSAP'],
              },
              {
                no: '02',
                title: 'Branding & Identity',
                desc: 'Visual identities that stand out. Logo systems, brand strategy, and guidelines that make your business unmistakable.',
                tags: ['Strategy', 'Logo', 'Identity', 'Guidelines'],
              },
              {
                no: '03',
                title: 'Social Media',
                desc: 'Content strategy and management that grows engaged audiences. From positioning to daily publishing.',
                tags: ['Strategy', 'Content', 'Community'],
              },
              {
                no: '04',
                title: 'Graphic Design',
                desc: 'Posters, decks, social posts, and brand collateral. Editorial-grade visuals for every touchpoint.',
                tags: ['Editorial', 'Print', 'Digital'],
              },
            ].map((s) => (
              <div
                key={s.no}
                style={{
                  background: ink,
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  minHeight: '320px',
                  transition: 'background 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.12em',
                      fontWeight: 500,
                      color: accent,
                    }}
                  >
                    ({s.no})
                  </span>
                  <span
                    style={{
                      fontSize: '20px',
                      color: mutedSoft,
                    }}
                  >
                    →
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    color: cream,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.55,
                    color: muted,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.tags.map((t) => (
                    <span key={t} style={tagPill}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORK ==================== */}
      <section id="work" style={{ ...section, background: ink900 }}>
        <div style={container}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '64px',
            }}
          >
            <div>
              <p style={eyebrow}>/ Selected work</p>
              <h2 style={h2Display}>
                Recent projects.{' '}
                <span style={{ color: mutedSoft }}>Real outcomes.</span>
              </h2>
            </div>
            <a href="#contact" style={btnGhost}>
              Start your project
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                no: '01',
                title: 'Atlas Logistics',
                cat: 'Web · Branding',
                year: '2026',
                desc: 'A new digital foundation for a logistics platform expanding into South Asia.',
                grad: `linear-gradient(135deg, ${accent}30, ${ink})`,
              },
              {
                no: '02',
                title: 'Karachi Coffee Co.',
                cat: 'Brand Identity',
                year: '2025',
                desc: 'A bold new identity for a specialty coffee roaster. From logo to packaging.',
                grad: `linear-gradient(135deg, ${cream}20, ${ink})`,
              },
              {
                no: '03',
                title: 'Northwind Studios',
                cat: 'Web · Motion',
                year: '2025',
                desc: 'Immersive agency website with WebGL hero, GSAP scroll choreography, custom CMS.',
                grad: `linear-gradient(135deg, ${accentDark}30, ${ink})`,
              },
              {
                no: '04',
                title: 'Saffron & Salt',
                cat: 'Social Media',
                year: '2025',
                desc: 'Restaurant social strategy and content engine. 3x organic reach in 90 days.',
                grad: `linear-gradient(135deg, ${accent}20, ${ink})`,
              },
            ].map((p) => (
              <article
                key={p.no}
                style={{
                  background: ink,
                  border: `1px solid ${line}`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    aspectRatio: '4 / 3',
                    background: p.grad,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(80px, 14vw, 160px)',
                      fontWeight: 800,
                      color: 'rgba(245, 245, 242, 0.06)',
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                    }}
                  >
                    {p.no}
                  </span>
                </div>
                <div style={{ padding: '28px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        color: accent,
                      }}
                    >
                      {p.cat}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: mutedSoft,
                      }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      color: cream,
                      margin: '0 0 12px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.55,
                      color: muted,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" style={section}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <p style={eyebrow}>/ The studio</p>
              <h2 style={h2Display}>
                Bold work.{' '}
                <span style={{ color: mutedSoft }}>Quietly delivered.</span>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: muted,
                  margin: '0 0 24px',
                }}
              >
                JFR Studios is a digital studio built for ambitious brands that
                want to be remembered. We work with founders, marketers, and
                creative leaders to ship websites, identities, and content that
                earn attention — and convert it.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: muted,
                  margin: 0,
                }}
              >
                Based in Pakistan. Working worldwide. We move fast, communicate
                clearly, and care deeply about craft. We don't disappear after
                launch — we partner for the long run.
              </p>

              <div
                style={{
                  marginTop: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                }}
              >
                {[
                  { v: '100%', l: 'Remote-friendly' },
                  { v: '24h', l: 'Avg. response' },
                ].map((s) => (
                  <div key={s.l}>
                    <p
                      style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        color: accent,
                        margin: 0,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {s.v}
                    </p>
                    <p
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: muted,
                        margin: '8px 0 0',
                      }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" style={{ ...section, background: ink900 }}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <p style={eyebrow}>/ Get in touch</p>
              <h2 style={{ ...h2Display, marginBottom: '24px' }}>
                Let's build something{' '}
                <span style={{ color: accent }}>brilliant</span> together.
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: muted,
                  maxWidth: '440px',
                  margin: 0,
                }}
              >
                Tell us about your project. We typically reply within 24 hours
                and love working on ideas big and small.
              </p>
            </div>

            <div>
              <a
                href="mailto:hello@jfrstudios.store"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: cream,
                  textDecoration: 'none',
                  lineHeight: 1.1,
                }}
              >
                hello@jfrstudios.store
                <span style={{ fontSize: '0.8em' }}>↗</span>
              </a>

              <div
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: accent,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Find us on
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {[
                    { name: 'Instagram', href: 'https://instagram.com/jfrstudios' },
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/jfrstudios' },
                    { name: 'Behance', href: 'https://behance.net/jfrstudios' },
                    { name: 'Dribbble', href: 'https://dribbble.com/jfrstudios' },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...tagPill,
                        textDecoration: 'none',
                        transition: 'border-color 0.2s ease, color 0.2s ease',
                      }}
                    >
                      {s.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer
        style={{
          padding: '48px 0 32px',
          borderTop: `1px solid ${line}`,
          background: ink,
        }}
      >
        <div style={container}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                fontWeight: 800,
                fontSize: '18px',
                letterSpacing: '-0.04em',
              }}
            >
              <span style={{ color: cream }}>/JFR</span>
              <span style={{ color: accent }}>.</span>
              <span style={{ color: muted }}>studios</span>
            </div>
            <p
              style={{
                fontSize: '12px',
                color: mutedSoft,
                margin: 0,
              }}
            >
              © 2026 JFR Studios · Made with ♥ using Next.js
            </p>
          </div>
        </div>
      </footer>

      {/* ==================== GLOBAL ANIMATIONS ==================== */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(2); opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${accent}; color: ${ink}; }
        a:hover { color: ${accent}; }
      `}</style>
    </>
  );
}