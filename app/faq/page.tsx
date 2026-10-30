import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ink,
  cream,
  creamBright,
  gold,
  mutedDark,
  lineDark,
  mutedLight,
  mutedLightSoft,
  lineLight,
  container,
  faqs,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ — Questions Before You Hire Us',
  description:
    'Common questions about working with JFR Studios: timelines, working across time zones, payment terms, ownership of files, and what happens after launch.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — JFR Studios',
    description: 'Timelines, payment terms, ownership and after-launch support.',
    url: '/faq',
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

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        style={{
          paddingTop: '170px',
          paddingBottom: '70px',
          background: ink,
          color: cream,
          borderBottom: `1px solid ${lineDark}`,
        }}
      >
        <div style={container}>
          <div style={eyebrow}>
            FAQ
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h1, maxWidth: '760px' }}>
            Everything people ask before they commit.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '620px', margin: 0 }}>
            If your question is not here, ask it directly. We would rather answer
            it now than find out you were unsure after the invoice.
          </p>
        </div>
      </section>

      <section style={{ background: creamBright, color: ink, padding: '90px 0' }}>
        <div style={container}>
          <div
            className="g-cards-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0 70px',
              alignItems: 'start',
            }}
          >
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                style={{
                  borderBottom: `1px solid ${lineLight}`,
                  padding: '26px 0',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontSize: '19px',
                      fontWeight: 700,
                      color: ink,
                      lineHeight: 1.35,
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      color: gold,
                      fontSize: '22px',
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: mutedLight,
                    margin: '14px 0 0',
                  }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

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
              <h2
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Still holding a question?
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: mutedLightSoft,
                  maxWidth: '540px',
                  margin: '14px 0 0',
                }}
              >
                Send it over. We answer within one working day, including the ones
                that make us look bad.
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
              Ask us <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}