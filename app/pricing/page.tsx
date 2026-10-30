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
  plans,
  services,
  faqs,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pricing — Packages Starting at $450',
  description:
    'Transparent JFR Studios pricing. Fixed-price projects from $450, monthly retainers from $1,200. No lock-in, you own everything we make.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — JFR Studios',
    description: 'Fixed-price projects from $450, retainers from $1,200. No lock-in.',
    url: '/pricing',
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

const comparison = [
  { label: 'Services included', values: ['One', 'Any two', 'All six'] },
  { label: 'Revision rounds', values: ['Two', 'Unlimited', 'Unlimited'] },
  { label: 'Turnaround', values: ['2 to 3 weeks', 'Ongoing', 'Priority'] },
  { label: 'Reporting', values: ['—', 'Monthly', 'Monthly + quarterly'] },
  { label: 'Support channel', values: ['Email', 'Slack or WhatsApp', 'Shared channel'] },
  { label: 'Strategy sessions', values: ['—', '—', 'Quarterly'] },
  { label: 'Response time', values: ['2 working days', 'Same day', 'Same day'] },
];

export default function PricingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 5).map((f) => ({
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
          paddingBottom: '80px',
          background: ink,
          color: cream,
          borderBottom: `1px solid ${lineDark}`,
        }}
      >
        <div style={container}>
          <div style={eyebrow}>
            Pricing
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h1, maxWidth: '760px' }}>
            Published prices, because we would rather lose a deal than waste your week.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '640px', margin: 0 }}>
            These are the numbers we actually charge. If your project does not fit
            one of them cleanly, we will tell you on the first call rather than
            quietly doubling the estimate later.
          </p>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section style={{ background: ink, color: cream, padding: '80px 0' }}>
        <div style={container}>
          <div
            className="g-cards-3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  padding: '36px 30px',
                  border: plan.featured ? `2px solid ${gold}` : `1px solid ${lineDark}`,
                  background: plan.featured ? 'rgba(212, 164, 55, 0.06)' : 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {plan.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '30px',
                      background: gold,
                      color: ink,
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: '999px',
                    }}
                  >
                    Most chosen
                  </span>
                )}

                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: gold,
                    fontWeight: 700,
                    marginBottom: '14px',
                  }}
                >
                  {plan.name}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontSize: '3rem',
                      fontWeight: 700,
                      color: cream,
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: mutedDarkSoft,
                    marginBottom: '18px',
                  }}
                >
                  {plan.cadence}
                </div>

                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    color: mutedDark,
                    margin: '0 0 26px',
                    paddingBottom: '24px',
                    borderBottom: `1px dashed ${lineDark}`,
                  }}
                >
                  {plan.pitch}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '13px',
                    flex: 1,
                  }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '11px',
                        fontSize: '14px',
                        color: mutedDark,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: gold, flexShrink: 0, marginTop: '2px' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M4 12 L9 17 L20 6"
                            stroke={gold}
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '14px 24px',
                    borderRadius: '999px',
                    background: plan.featured ? gold : 'transparent',
                    border: plan.featured ? 'none' : `1px solid ${gold}`,
                    color: plan.featured ? ink : gold,
                    fontWeight: 700,
                    fontSize: '12.5px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Choose {plan.name} <span aria-hidden>&rarr;</span>
                </Link>

                <div
                  style={{
                    marginTop: '14px',
                    fontSize: '12px',
                    color: mutedDarkSoft,
                    textAlign: 'center',
                  }}
                >
                  {plan.best}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: '36px',
              fontSize: '14px',
              color: mutedDarkSoft,
              textAlign: 'center',
            }}
          >
            Prices are in USD. Payment is half upfront on project work, or billed
            on the first working day of each month for retainers.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: creamBright, color: ink, padding: '90px 0' }}>
        <div style={container}>
          <div style={{ ...eyebrow, color: gold }}>
            Side by side
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, color: ink, maxWidth: '620px' }}>
            What actually changes between the three.
          </h2>

          <div style={{ overflowX: 'auto', marginTop: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '620px' }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '16px 14px',
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: mutedLightSoft,
                      fontWeight: 700,
                      borderBottom: `2px solid ${lineLight}`,
                    }}
                  >
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      style={{
                        textAlign: 'left',
                        padding: '16px 14px',
                        fontSize: '12px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: p.featured ? gold : mutedLightSoft,
                        fontWeight: 700,
                        borderBottom: `2px solid ${lineLight}`,
                      }}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, ri) => (
                  <tr key={row.label}>
                    <td
                      style={{
                        padding: '18px 14px',
                        fontSize: '14.5px',
                        color: ink,
                        fontWeight: 500,
                        borderBottom: `1px dashed ${lineLight}`,
                      }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((v, vi) => (
                      <td
                        key={vi}
                        style={{
                          padding: '18px 14px',
                          fontSize: '14px',
                          color: v === '—' ? mutedLightSoft : mutedLight,
                          borderBottom: `1px dashed ${lineLight}`,
                        }}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section style={{ background: cream, color: ink, padding: '90px 0' }}>
        <div style={container}>
          <div style={{ ...eyebrow, color: gold }}>
            If you only need one thing
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, color: ink, maxWidth: '640px' }}>
            Every service can also be bought on its own.
          </h2>
          <div
            className="g-cards-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            {services.map((s) => (
              <div
                key={s.slug}
                style={{
                  background: '#fff',
                  border: `1px solid ${lineLight}`,
                  borderRadius: '12px',
                  padding: '26px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    margin: '0 0 8px',
                    color: ink,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: mutedLight,
                    margin: '0 0 16px',
                  }}
                >
                  {s.short}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: gold,
                    }}
                  >
                    {s.startingAt}
                  </span>
                  <span style={{ fontSize: '12.5px', color: mutedLightSoft }}>{s.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: ink, color: cream, padding: '100px 0' }}>
        <div style={container}>
          <div style={eyebrow}>
            Pricing questions
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, maxWidth: '620px' }}>
            Money questions are the sensible ones to ask.
          </h2>
          <div style={{ maxWidth: '820px', marginTop: '36px' }}>
            {faqs.slice(3, 7).map((f) => (
              <details key={f.q} style={{ borderBottom: `1px solid ${lineDark}`, padding: '22px 0' }}>
                <summary
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: cream,
                    listStyle: 'none',
                  }}
                >
                  {f.q}
                </summary>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: mutedDarkSoft,
                    margin: '16px 0 0',
                    maxWidth: '700px',
                  }}
                >
                  {f.a}
                </p>
              </details>
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
              <h2 style={{ ...h2, color: ink, margin: 0 }}>
                Still deciding? Start with a call, not a contract.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: mutedLight, maxWidth: '560px', margin: '14px 0 0' }}>
                Thirty minutes, no pitch deck. We will tell you which package fits
                and roughly what it will cost before you commit to anything.
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
              Book a call <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}