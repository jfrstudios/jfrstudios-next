import Link from 'next/link';
import type { CSSProperties } from 'react';

// JFR Studios - Gold + Black theme for international clients

const ink = '#07070A';
const ink900 = '#0B0B10';
const cream = '#F5F5F2';
const muted = 'rgba(245, 245, 242, 0.62)';
const mutedSoft = 'rgba(245, 245, 242, 0.38)';
const line = 'rgba(245, 245, 242, 0.10)';
const gold = '#D4AF37';
const goldLight = '#E8C766';
const goldDark = '#9C7A1C';

const container: CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 24px',
};

const section: CSSProperties = {
  padding: '112px 0',
  borderTop: `1px solid ${line}`,
  position: 'relative',
};

const eyebrow: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '14px',
  fontSize: '11px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: gold,
  marginBottom: '24px',
};

const h2Display: CSSProperties = {
  fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
  fontWeight: 700,
  letterSpacing: '-0.035em',
  lineHeight: 1.0,
  margin: 0,
};

const goldText: CSSProperties = {
  background: `linear-gradient(135deg, ${goldLight}, ${goldDark})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
};

const tagPill: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '5px 11px',
  fontSize: '10.5px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 500,
  borderRadius: '999px',
  border: `1px solid ${line}`,
  color: 'rgba(245, 245, 242, 0.82)',
};

const btnPrimary: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '15px 28px',
  borderRadius: '999px',
  background: gold,
  color: ink,
  fontWeight: 600,
  fontSize: '12.5px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
};

const btnGhost: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '15px 28px',
  borderRadius: '999px',
  border: `1px solid ${line}`,
  color: cream,
  fontWeight: 500,
  fontSize: '12.5px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  background: 'transparent',
  cursor: 'pointer',
};

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '18px 0',
          background: 'rgba(7, 7, 10, 0.72)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
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
              fontSize: '19px',
              letterSpacing: '-0.04em',
            }}
          >
            <span style={{ color: cream }}>/JFR</span>
            <span style={goldText}>.</span>
            <span style={{ color: muted }}>studios</span>
          </Link>

          <nav
            aria-label="Primary"
            style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
          >
            {['Services', 'Work', 'About', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: cream,
                  textDecoration: 'none',
                }}
              >
                {l}
              </a>
            ))}
          </nav>

          <a
            href="mailto:hello@jfrstudios.store"
            style={{ ...btnGhost, padding: '11px 22px', fontSize: '11.5px' }}
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
          paddingTop: '180px',
          paddingBottom: '100px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-12%',
            right: '-8%',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.22), transparent 60%)',
            filter: 'blur(110px)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-25%',
            left: '-10%',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(156, 122, 28, 0.14), transparent 60%)',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ ...container, position: 'relative', zIndex: 1, width: '100%' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '11.5px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: gold,
              marginBottom: '48px',
              padding: '8px 16px',
              borderRadius: '999px',
              border: `1px solid ${line}`,
              background: 'rgba(212, 175, 55, 0.04)',
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
                  background: gold,
                  opacity: 0.5,
                  animation: 'pulse 2.4s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: gold,
                }}
              />
            </span>
            Booking projects for Q3 2026 — worldwide
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.75rem, 8.5vw, 7.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 0.92,
              margin: 0,
              maxWidth: '1280px',
            }}
          >
            <span style={{ display: 'block' }}>A studio for brands</span>
            <span style={{ display: 'block' }}>
              that refuse to <span style={goldText}>blend in.</span>
            </span>
            <span
              style={{
                display: 'block',
                color: mutedSoft,
                fontWeight: 500,
                marginTop: '8px',
              }}
            >
              We design, build and grow them.
            </span>
          </h1>

          <div
            style={{
              marginTop: '64px',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
              gap: '56px',
              alignItems: 'end',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: muted,
                margin: 0,
                maxWidth: '560px',
              }}
            >
              JFR Studios is a small, sharp team of designers and engineers
              based in Pakistan, working with founders, marketers and creative
              leaders across the world. We make the kind of work that earns
              attention — and turns it into customers.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#contact" style={btnPrimary}>
                Start a project <span style={{ fontSize: '14px' }}>→</span>
              </a>
              <a href="#work" style={btnGhost}>
                See selected work
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: '112px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '1px',
              background: line,
              border: `1px solid ${line}`,
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            {[
              { v: '40+', l: 'Brands launched' },
              { v: '17', l: 'Countries served' },
              { v: '$12M+', l: 'Client revenue tracked' },
              { v: '< 24h', l: 'Reply, every time' },
            ].map((s) => (
              <div key={s.l} style={{ background: ink, padding: '36px 28px' }}>
                <p
                  style={{
                    fontSize: '46px',
                    fontWeight: 700,
                    color: gold,
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {s.v}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: muted,
                    margin: '14px 0 0',
                    fontWeight: 500,
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={section}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2.4fr)',
              gap: '48px',
              marginBottom: '80px',
            }}
          >
            <p style={eyebrow}>
              <span style={{ width: '32px', height: '1px', background: gold }} />
              What we do
            </p>
            <h2 style={h2Display}>
              Six disciplines, one obsession:{' '}
              <span style={{ color: mutedSoft }}>work that lasts.</span>
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
                title: 'Web Design & Development',
                desc: 'Sites and apps that feel inevitable. Built with care, shipped on time, optimised for the people who actually use them.',
                tags: ['Next.js', 'React', 'TypeScript', 'CMS'],
              },
              {
                no: '02',
                title: 'Brand Identity',
                desc: 'A logo is the smallest part. We build the system — voice, type, colour, motion, guidelines — that lets a brand speak clearly anywhere.',
                tags: ['Strategy', 'Logo', 'Guidelines', 'Voice'],
              },
              {
                no: '03',
                title: 'Social Media',
                desc: 'Less noise, more signal. We plan, write and design a content rhythm that earns trust and grows an audience worth keeping.',
                tags: ['Strategy', 'Editorial', 'Community'],
              },
              {
                no: '04',
                title: 'Graphic Design',
                desc: 'Editorial-grade visuals for the moments a brand gets noticed. Posters, decks, packaging, social — same standard, everywhere.',
                tags: ['Print', 'Digital', 'Packaging'],
              },
              {
                no: '05',
                title: 'Digital Marketing',
                desc: 'Paid and organic, working together. Campaigns built around one promise: every dollar has a job, and we can show you which one.',
                tags: ['SEO', 'Paid Ads', 'Analytics'],
              },
              {
                no: '06',
                title: 'Content Creation',
                desc: 'Stories told properly. Photography, video, writing and motion — produced with care, distributed with intent.',
                tags: ['Photo', 'Video', 'Copy'],
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
                  minHeight: '340px',
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
                      letterSpacing: '0.16em',
                      fontWeight: 500,
                      color: gold,
                    }}
                  >
                    ({s.no})
                  </span>
                  <span style={{ fontSize: '20px', color: mutedSoft }}>→</span>
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    color: cream,
                    lineHeight: 1.15,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    color: muted,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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

      {/* Work */}
      <section id="work" style={{ ...section, background: ink900 }}>
        <div style={container}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
              marginBottom: '80px',
            }}
          >
            <div style={{ maxWidth: '720px' }}>
              <p style={eyebrow}>
                <span style={{ width: '32px', height: '1px', background: gold }} />
                Selected work
              </p>
              <h2 style={h2Display}>
                Four recent builds.{' '}
                <span style={{ color: mutedSoft }}>Real outcomes, no filler.</span>
              </h2>
            </div>
            <a href="#contact" style={btnGhost}>
              Have a project? Let&apos;s talk
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
                cat: 'Web · Brand',
                desc: 'A digital foundation for a regional logistics platform preparing to scale across South Asia.',
              },
              {
                no: '02',
                title: 'Karachi Coffee Co.',
                cat: 'Brand · Packaging',
                desc: 'A new identity for a specialty roaster — from the cup in your hand to the sign above the door.',
              },
              {
                no: '03',
                title: 'Northwind Studios',
                cat: 'Web · Motion',
                desc: 'An agency site with a WebGL hero, GSAP scroll work and a CMS the team actually wants to use.',
              },
              {
                no: '04',
                title: 'Saffron & Salt',
                cat: 'Social · Content',
                desc: 'A content engine for a restaurant group that tripled organic reach in twelve weeks.',
              },
            ].map((p) => (
              <article
                key={p.no}
                style={{
                  background: ink,
                  border: `1px solid ${line}`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    aspectRatio: '4 / 3',
                    background: `linear-gradient(135deg, ${gold}30, ${ink})`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(80px, 14vw, 160px)',
                      fontWeight: 700,
                      color: 'rgba(245, 245, 242, 0.05)',
                      letterSpacing: '-0.06em',
                      lineHeight: 1,
                    }}
                  >
                    {p.no}
                  </span>
                </div>
                <div style={{ padding: '32px 28px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        color: gold,
                      }}
                    >
                      {p.cat}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: mutedSoft,
                        letterSpacing: '0.1em',
                      }}
                    >
                      2025 — 2026
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
                      fontSize: '14.5px',
                      lineHeight: 1.6,
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

      {/* About */}
      <section id="about" style={section}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            <div>
              <p style={eyebrow}>
                <span style={{ width: '32px', height: '1px', background: gold }} />
                The studio
              </p>
              <h2 style={h2Display}>
                A small team.{' '}
                <span style={{ color: mutedSoft }}>A long memory.</span>
              </h2>
              <p
                style={{
                  marginTop: '24px',
                  fontSize: '15px',
                  color: muted,
                  maxWidth: '420px',
                }}
              >
                We&apos;ve been the team people call when the brief is hard, the
                timeline is real, and the work has to be good.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: muted,
                  margin: '0 0 28px',
                }}
              >
                JFR Studios was started because the work we wanted to make
                didn&apos;t have a home in larger shops, and the work our
                clients needed couldn&apos;t be done well by one freelancer at
                a time.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: muted,
                  margin: 0,
                }}
              >
                We&apos;re small on purpose. Every project is led by a senior,
                every line of code and every frame is reviewed, and we
                don&apos;t take on work we can&apos;t finish properly. The
                result is a studio that ships calmly, talks straight, and
                treats your time like ours.
              </p>

              <div
                style={{
                  marginTop: '48px',
                  paddingTop: '32px',
                  borderTop: `1px solid ${line}`,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '28px',
                }}
              >
                {[
                  { v: 'Senior-led', l: 'Every project' },
                  { v: 'Fixed scope', l: 'No surprise bills' },
                  { v: 'One team', l: 'Start to finish' },
                  { v: 'Lifetime', l: 'Post-launch support' },
                ].map((s) => (
                  <div key={s.l}>
                    <p
                      style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: gold,
                        margin: 0,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {s.v}
                    </p>
                    <p
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: muted,
                        margin: '8px 0 0',
                        fontWeight: 500,
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

      {/* Contact */}
      <section id="contact" style={{ ...section, background: ink900 }}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            <div>
              <p style={eyebrow}>
                <span style={{ width: '32px', height: '1px', background: gold }} />
                Get in touch
              </p>
              <h2 style={{ ...h2Display, marginBottom: '32px' }}>
                Tell us about the work.{' '}
                <span style={goldText}>We&apos;ll take it from there.</span>
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: muted,
                  maxWidth: '460px',
                  margin: 0,
                }}
              >
                One short email is enough to start. We read everything, reply
                within a working day, and if we&apos;re not the right fit,
                we&apos;ll tell you who is.
              </p>
            </div>

            <div>
              <a
                href="mailto:hello@jfrstudios.store"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: 'clamp(1.4rem, 2.6vw, 2.25rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.04em',
                  color: cream,
                  textDecoration: 'none',
                  lineHeight: 1.15,
                }}
              >
                hello@jfrstudios.store
                <span style={{ ...goldText, fontSize: '0.85em' }}>↗</span>
              </a>

              <div
                style={{
                  marginTop: '48px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                  paddingTop: '32px',
                  borderTop: `1px solid ${line}`,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: gold,
                      margin: 0,
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    Based
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      color: cream,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Lahore · Pakistan
                    <br />
                    <span style={{ color: muted }}>Working with the world</span>
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: gold,
                      margin: 0,
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    Hours
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      color: cream,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Mon — Fri
                    <br />
                    <span style={{ color: muted }}>09:00 — 19:00 PKT</span>
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
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
                      padding: '8px 14px',
                    }}
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '40px 0 32px',
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
                fontSize: '17px',
                letterSpacing: '-0.04em',
              }}
            >
              <span style={{ color: cream }}>/JFR</span>
              <span style={goldText}>.</span>
              <span style={{ color: muted }}>studios</span>
            </div>
            <p
              style={{
                fontSize: '12px',
                color: mutedSoft,
                margin: 0,
                letterSpacing: '0.04em',
              }}
            >
              © 2026 JFR Studios · Crafted in Pakistan · Available worldwide
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(2.4); opacity: 0; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        ::selection { background: ${gold}; color: ${ink}; }
        a:hover { color: ${gold}; transition: color 0.2s ease; }
        a { transition: color 0.2s ease; }
      `}</style>
    </>
  );
}