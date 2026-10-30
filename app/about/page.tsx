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
  values,
  stats,
  process,
  faqs,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — The Team Behind JFR Studios',
  description:
    'JFR Studios is a senior-led digital agency based in Lahore, Pakistan, working with clients worldwide. Meet the team, see how we work and read answers to common questions.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us — JFR Studios',
    description:
      'A senior-led digital agency in Lahore working with clients across Europe, North America and Australia.',
    url: '/about',
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

const h3: React.CSSProperties = {
  fontFamily: 'var(--font-display), Georgia, serif',
  fontSize: '19px',
  fontWeight: 700,
  margin: '0 0 10px',
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

const imgAbout =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=750&fit=crop';

export default function AboutPage() {
  return (
    <>
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
            About Us
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h1, maxWidth: '820px' }}>
            A small studio that would rather turn down work than rush it.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '660px', margin: 0 }}>
            JFR Studios started in Lahore in 2020 with one client and a borrowed
            desk. Six years later we are a team of eleven, we still take on roughly
            the same number of projects per quarter, and we have turned down work
            every single month since we started.
          </p>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section style={{ background: creamBright, color: ink, padding: '100px 0' }}>
        <div style={container}>
          <div
            className="g-about"
            style={{
              display: 'grid',
              gridTemplateColumns: '0.95fr 1.05fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                border: `1px solid ${lineLight}`,
                background: '#fff',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgAbout}
                alt="The JFR Studios workspace in Lahore"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div>
              <h2 style={{ ...h2, color: ink }}>
                Creative minds <span style={{ color: gold, fontStyle: 'italic' }}>behind</span> the work.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: mutedLight, margin: '0 0 20px' }}>
                We started because the work we wanted to make had nowhere to go in
                the larger shops in our city, and the work our clients actually
                needed could not be done well by one freelancer juggling five
                projects at a time.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: mutedLight, margin: '0 0 20px' }}>
                So we built the thing we could not find. Eleven people, all senior or
                working directly with someone senior. No account managers sitting
                between you and the person making your site. No juniors learning on
                your budget.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: mutedLight, margin: 0 }}>
                Most of our clients are outside Pakistan. That shaped how we work
                more than anything else. We write things down, we work in European
                hours, and we never ask you to be available for a call that could
                have been an email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: ink, color: cream, padding: '80px 0', borderTop: `1px solid ${lineDark}` }}>
        <div style={container}>
          <div
            className="g-stats"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                    fontWeight: 700,
                    color: gold,
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: mutedDarkSoft,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: creamBright, color: ink, padding: '100px 0' }}>
        <div style={container}>
          <div style={{ ...eyebrow, color: gold }}>
            What we hold to
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, color: ink, maxWidth: '680px' }}>
            Four things we will not trade away, even in a tight month.
          </h2>
          <div
            className="g-cards-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginTop: '44px',
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: '#fff',
                  border: `1px solid ${lineLight}`,
                  borderRadius: '12px',
                  padding: '28px 24px',
                }}
              >
                <span style={{ color: gold, display: 'block', marginBottom: '14px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2 L14 9 L21 10 L16 14 L18 21 L12 17 L6 21 L8 14 L3 10 L10 9 Z"
                      stroke={gold}
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 style={{ ...h3, color: ink, fontSize: '17px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: mutedLight, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: ink, color: cream, padding: '100px 0' }}>
        <div style={container}>
          <div style={eyebrow}>
            How we work
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, maxWidth: '700px' }}>
            From first call to handover, in six steps.
          </h2>
          <div
            className="g-cards-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '44px',
            }}
          >
            {process.map((p) => (
              <div
                key={p.step}
                style={{ border: `1px solid ${lineDark}`, borderRadius: '12px', padding: '28px 26px' }}
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
                <h3 style={{ ...h3, color: cream }}>{p.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: mutedDarkSoft, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: creamBright, color: ink, padding: '100px 0' }}>
        <div style={container}>
          <div style={{ ...eyebrow, color: gold }}>
            FAQ
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h2 style={{ ...h2, color: ink, maxWidth: '640px' }}>
            The questions we get asked before anyone signs anything.
          </h2>
          <div style={{ maxWidth: '820px', marginTop: '36px' }}>
            {faqs.map((f, i) => (
              <details
                key={f.q}
                style={{
                  borderBottom: `1px solid ${lineLight}`,
                  padding: '22px 0',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: ink,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  {f.q}
                  <span style={{ color: gold, fontSize: '20px', flexShrink: 0 }}>
                    {i === 0 ? '−' : '+'}
                  </span>
                </summary>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: mutedLight,
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
              <h2 style={{ ...h2, margin: 0 }}>Sounds like a fit. Talk to us.</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: mutedDark, maxWidth: '540px', margin: '14px 0 0' }}>
                One email is enough to start. We reply within a working day, even
                if the answer is that you should hire someone else.
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
              Get in touch <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}