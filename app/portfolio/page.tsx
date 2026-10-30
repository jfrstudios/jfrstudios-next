import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ink,
  cream,
  creamBright,
  gold,
  mutedDark,
  mutedDarkSoft,
  lineDark,
  mutedLight,
  mutedLightSoft,
  lineLight,
  container,
  projects,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Portfolio — Client Work & Results',
  description:
    'Selected JFR Studios projects: websites, brand identities, social media campaigns and marketing work for clients in the Netherlands, Portugal, Australia, Canada and the UK.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — JFR Studios',
    description: 'Selected client work across web, brand, social and marketing.',
    url: '/portfolio',
  },
};

const h1: React.CSSProperties = {
  fontFamily: 'var(--font-display), Georgia, serif',
  fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  margin: '0 0 22px',
};

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display), Georgia, serif',
  fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.12,
  margin: '0 0 20px',
};

const eyebrow: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '11px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  fontWeight: 700,
  color: gold,
  marginBottom: '18px',
};

export default function PortfolioPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: '/portfolio' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section
        style={{
          paddingTop: '170px',
          paddingBottom: '80px',
          background: ink,
          color: cream,
          borderBottom: `1px solid ${lineDark}`,
        }}
      >
        <div style={container}>
          <div style={eyebrow}>
            Our Portfolio
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h1, maxWidth: '780px' }}>
            Six projects, and what actually changed after them.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '620px', margin: 0 }}>
            Every entry below names the problem we were hired to fix, what we
            changed, and the number the client saw afterwards. Where a result is
            modest, we have written it down as it happened.
          </p>
        </div>
      </section>

      {projects.map((project, index) => {
        const dark = index % 2 === 1;
        return (
          <section
            key={project.slug}
            id={project.slug}
            style={{
              background: dark ? ink : creamBright,
              color: dark ? cream : ink,
              padding: '90px 0',
            }}
          >
            <div style={container}>
              {/* Meta strip */}
              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  flexWrap: 'wrap',
                  marginBottom: '40px',
                  paddingBottom: '24px',
                  borderBottom: `1px solid ${dark ? lineDark : lineLight}`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: gold,
                      fontWeight: 700,
                      marginBottom: '5px',
                    }}
                  >
                    Client
                  </div>
                  <div style={{ fontSize: '14.5px', color: dark ? cream : ink }}>{project.client}</div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: gold,
                      fontWeight: 700,
                      marginBottom: '5px',
                    }}
                  >
                    Service
                  </div>
                  <div style={{ fontSize: '14.5px', color: dark ? cream : ink }}>
                    {project.category}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: gold,
                      fontWeight: 700,
                      marginBottom: '5px',
                    }}
                  >
                    Location
                  </div>
                  <div style={{ fontSize: '14.5px', color: dark ? cream : ink }}>
                    {project.location}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: gold,
                      fontWeight: 700,
                      marginBottom: '5px',
                    }}
                  >
                    Year
                  </div>
                  <div style={{ fontSize: '14.5px', color: dark ? cream : ink }}>{project.year}</div>
                </div>
              </div>

              <div
                className="g-about"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '0.95fr 1.05fr',
                  gap: '60px',
                  alignItems: 'start',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    aspectRatio: '4 / 3',
                    border: `1px solid ${dark ? lineDark : lineLight}`,
                    background: dark ? '#111' : '#fff',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.client} project by JFR Studios`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: dark ? 'brightness(0.85)' : 'none',
                    }}
                  />
                </div>

                {/* Story */}
                <div>
                  <h2 style={{ ...h2, color: dark ? cream : ink }}>{project.title}</h2>
                  <p
                    style={{
                      fontSize: '16.5px',
                      lineHeight: 1.65,
                      color: dark ? mutedDark : mutedLight,
                      margin: '0 0 28px',
                      fontStyle: 'italic',
                    }}
                  >
                    {project.summary}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: gold,
                        fontWeight: 700,
                        marginBottom: '9px',
                      }}
                    >
                      The problem
                    </div>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: dark ? mutedDarkSoft : mutedLightSoft,
                        margin: 0,
                      }}
                    >
                      {project.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: gold,
                        fontWeight: 700,
                        marginBottom: '9px',
                      }}
                    >
                      What we did
                    </div>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: dark ? mutedDarkSoft : mutedLightSoft,
                        margin: 0,
                      }}
                    >
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: gold,
                        fontWeight: 700,
                        marginBottom: '9px',
                      }}
                    >
                      What happened
                    </div>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: dark ? mutedDarkSoft : mutedLightSoft,
                        margin: 0,
                      }}
                    >
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div
                className="g-stats"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '24px',
                  marginTop: '48px',
                  paddingTop: '32px',
                  borderTop: `1px solid ${dark ? lineDark : lineLight}`,
                }}
              >
                {project.results.map((r) => (
                  <div key={r.label}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display), Georgia, serif',
                        fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                        fontWeight: 700,
                        color: gold,
                        lineHeight: 1.1,
                        marginBottom: '7px',
                      }}
                    >
                      {r.value}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: dark ? mutedDarkSoft : mutedLightSoft,
                      }}
                    >
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Services used */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
                {project.services.map((s) => (
                  <span
                    key={s}
                    style={{
                      display: 'inline-flex',
                      padding: '6px 14px',
                      fontSize: '11.5px',
                      letterSpacing: '0.06em',
                      borderRadius: '999px',
                      border: `1px solid ${dark ? lineDark : lineLight}`,
                      color: dark ? mutedDark : mutedLight,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section style={{ background: ink, color: cream, padding: '80px 0' }}>
        <div style={container}>
          <div
            className="g-cta"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 0.6fr',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 style={{ ...h2, margin: 0 }}>Want the seventh one to be yours?</h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: mutedDark,
                  maxWidth: '560px',
                  margin: '14px 0 0',
                }}
              >
                Tell us what is not working. If we cannot help, we will say so and
                point you at someone who can.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 32px',
                borderRadius: '6px',
                background: gold,
                color: ink,
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Start a project <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}