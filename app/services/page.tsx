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
  lineLight,
  container,
  services,
  process,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — Web Design, Branding, Social Media & Marketing',
  description:
    'Six services from JFR Studios: web design and development, brand identity, social media management, graphic design, digital marketing and content creation. Fixed prices, clear timelines.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — JFR Studios',
    description:
      'Web design, branding, social media, graphic design, digital marketing and content creation with fixed prices and clear timelines.',
    url: '/services',
  },
};

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display), Georgia, serif',
  fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  margin: '0 0 20px',
};

const eyebrowStyle: React.CSSProperties = {
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

const pageHead: React.CSSProperties = {
  paddingTop: '170px',
  paddingBottom: '80px',
  background: ink,
  color: cream,
  borderBottom: `1px solid ${lineDark}`,
};

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.short,
        provider: { '@type': 'Organization', name: 'JFR Studios' },
        areaServed: 'Worldwide',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section style={pageHead}>
        <div style={container}>
          <div style={{ ...eyebrowStyle }}>
            Our Services
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h2, maxWidth: '820px' }}>
            Six things we do, and the reason each one is worth doing.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '640px', margin: 0 }}>
            Most agencies offer a list of deliverables. We would rather tell you what
            actually changes when you get each one, because that is the part that
            decides whether the project was worth the money.
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const dark = index % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            style={{
              background: dark ? creamBright : cream,
              color: ink,
              padding: '90px 0',
              scrollMarginTop: '90px',
            }}
          >
            <div style={container}>
              <div
                className={dark ? 'g-services' : 'g-cards-2'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: dark ? '1fr 2fr' : '1fr 1fr',
                  gap: '60px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ ...eyebrowStyle, color: gold }}>
                    Service {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 style={{ ...h2, color: ink }}>{service.title}</h2>
                  <p
                    style={{
                      fontSize: '15.5px',
                      lineHeight: 1.7,
                      color: mutedLight,
                      margin: '0 0 24px',
                    }}
                  >
                    {service.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                    <div>
                      <div
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: gold,
                          fontWeight: 700,
                          marginBottom: '5px',
                        }}
                      >
                        Timeline
                      </div>
                      <div style={{ fontSize: '14.5px', color: ink }}>{service.timeline}</div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: gold,
                          fontWeight: 700,
                          marginBottom: '5px',
                        }}
                      >
                        Starting at
                      </div>
                      <div style={{ fontSize: '14.5px', color: ink }}>{service.startingAt}</div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginTop: '28px',
                      padding: '13px 28px',
                      borderRadius: '6px',
                      background: gold,
                      color: ink,
                      fontWeight: 700,
                      fontSize: '12.5px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    Discuss this project <span aria-hidden>&rarr;</span>
                  </Link>
                </div>

                <div>
                  <div
                    style={{
                      background: '#fff',
                      border: `1px solid ${lineLight}`,
                      borderRadius: '12px',
                      padding: '30px 32px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: gold,
                        fontWeight: 700,
                        marginBottom: '20px',
                      }}
                    >
                      What you get
                    </div>
                    <ul
                      className="g-cards-2"
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '14px 28px',
                      }}
                    >
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '11px',
                            fontSize: '14.5px',
                            color: mutedLight,
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: gold, flexShrink: 0, marginTop: '1px' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M4 12 L9 17 L20 6"
                                stroke={gold}
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* PROCESS */}
      <section style={{ background: ink, color: cream, padding: '100px 0' }}>
        <div style={container}>
          <div style={{ ...eyebrowStyle }}>
            How we work
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, maxWidth: '700px' }}>
            The same six steps, whether the project is $450 or $2,600 a month.
          </h2>
          <div
            className="g-cards-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '48px',
            }}
          >
            {process.map((p) => (
              <div
                key={p.step}
                style={{
                  border: `1px solid ${lineDark}`,
                  borderRadius: '12px',
                  padding: '28px 26px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: '30px',
                    fontWeight: 700,
                    color: gold,
                    lineHeight: 1,
                    marginBottom: '14px',
                  }}
                >
                  {p.step}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 10px',
                    color: cream,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: mutedDarkSoft,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: creamBright, color: ink, padding: '80px 0' }}>
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
              <h2 style={{ ...h2, margin: 0 }}>
                Not sure which one you need?
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: mutedLight, maxWidth: '560px', margin: '14px 0 0' }}>
                That is a normal place to start. Tell us what is going wrong with the
                business and we will tell you which of these actually moves it.
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
              Start a conversation <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}