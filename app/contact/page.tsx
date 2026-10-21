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
  services,
  EMAIL,
  PHONE,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Start a Project with JFR Studios',
  description:
    'Get in touch with JFR Studios. We reply within one working day, work with clients worldwide, and will tell you honestly if we are not the right fit.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — JFR Studios',
    description: 'Reply within one working day. Clients worldwide welcome.',
    url: '/contact',
  },
};

const h1: React.CSSProperties = {
  fontFamily: 'Georgia, serif',
  fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  margin: '0 0 22px',
};

const h2: React.CSSProperties = {
  fontFamily: 'Georgia, serif',
  fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.12,
  margin: '0 0 18px',
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

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '8px',
  background: '#fff',
  border: `1px solid ${lineLight}`,
  color: ink,
  fontSize: '15px',
  fontFamily: 'inherit',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: mutedLight,
  fontWeight: 700,
  marginBottom: '8px',
};

export default function ContactPage() {
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
            Contact
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h1, maxWidth: '800px' }}>
            Tell us about the work. <span style={{ color: gold, fontStyle: 'italic' }}>We&apos;ll take it from there.</span>
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '620px', margin: 0 }}>
            One short message is enough. We read everything, reply within a
            working day, and if we are not the right fit we will tell you who is.
          </p>
        </div>
      </section>

      <section style={{ background: creamBright, color: ink, padding: '90px 0' }}>
        <div style={container}>
          <div
            className="g-services"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 0.7fr',
              gap: '60px',
              alignItems: 'start',
            }}
          >
            {/* FORM */}
            <div>
              <h2 style={{ ...h2, color: ink }}>Start a conversation</h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: mutedLight, margin: '0 0 32px' }}>
                The more you can tell us about the problem, the more useful our first
                reply will be. Budget and timeline can be rough.
              </p>

              <form
                action={`mailto:${EMAIL}`}
                method="post"
                encType="text/plain"
                style={{
                  background: '#fff',
                  border: `1px solid ${lineLight}`,
                  borderRadius: '14px',
                  padding: '32px 30px',
                }}
              >
                <div
                  className="g-cards-2"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Your name
                    </label>
                    <input id="name" name="name" type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email
                    </label>
                    <input id="email" name="email" type="email" required style={inputStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="company" style={labelStyle}>
                    Company <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input id="company" name="company" type="text" style={inputStyle} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="service" style={labelStyle}>
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="" disabled>
                      Pick a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="budget" style={labelStyle}>
                    Rough budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="" disabled>
                      Pick a range
                    </option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 to $1,500">$500 to $1,500</option>
                    <option value="$1,500 to $3,000">$1,500 to $3,000</option>
                    <option value="$3,000 and up">$3,000 and up</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="message" style={labelStyle}>
                    What is going on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="The more detail the better, but a few sentences is fine to start."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '16px 32px',
                    borderRadius: '6px',
                    background: gold,
                    color: ink,
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Send message <span aria-hidden>&rarr;</span>
                </button>

                <p
                  style={{
                    fontSize: '12.5px',
                    color: mutedLightSoft,
                    margin: '16px 0 0',
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}
                >
                  This opens your email app with the details filled in. Prefer to
                  write directly? Use the address on the right.
                </p>
              </form>
            </div>

            {/* DETAILS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div
                style={{
                  background: '#fff',
                  border: `1px solid ${lineLight}`,
                  borderRadius: '14px',
                  padding: '30px 28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 20px',
                    color: ink,
                  }}
                >
                  Direct contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '13px', textDecoration: 'none' }}
                  >
                    <span style={{ color: gold }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke={gold} strokeWidth="1.7" />
                        <path d="M3 7 L12 13 L21 7" stroke={gold} strokeWidth="1.7" fill="none" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '15px', color: ink }}>{EMAIL}</span>
                  </a>

                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '13px', textDecoration: 'none' }}
                  >
                    <span style={{ color: gold }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 4 H9 L11 9 L8.5 10.5 a12 12 0 0 0 6 6 L16 14 L21 16 V20 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2 Z"
                          stroke={gold}
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span style={{ fontSize: '15px', color: ink }}>{PHONE}</span>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                    <span style={{ color: gold, marginTop: '2px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 21 s-7 -7 -7 -12 a7 7 0 0 1 14 0 c0 5 -7 12 -7 12 Z"
                          stroke={gold}
                          strokeWidth="1.7"
                          fill="none"
                        />
                        <circle cx="12" cy="9" r="2.4" stroke={gold} strokeWidth="1.7" fill="none" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '15px', color: ink, lineHeight: 1.5 }}>
                      Lahore, Pakistan
                      <br />
                      <span style={{ color: mutedLightSoft, fontSize: '13.5px' }}>
                        Working hours 09:00 to 19:00 PKT
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#fff',
                  border: `1px solid ${lineLight}`,
                  borderRadius: '14px',
                  padding: '30px 28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 18px',
                    color: ink,
                  }}
                >
                  What happens next
                </h3>
                <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'We read it the same day and reply within one working day.',
                    'If it looks like a fit, we book a 30 minute call in your timezone.',
                    'You get a written scope and fixed price, usually within 48 hours.',
                    'You decide. No follow-up pressure, ever.',
                  ].map((step) => (
                    <li
                      key={step}
                      style={{ fontSize: '14.5px', lineHeight: 1.6, color: mutedLight }}
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div
                style={{
                  background: ink,
                  borderRadius: '14px',
                  padding: '30px 28px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '19px',
                    fontStyle: 'italic',
                    color: gold,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  Great design builds trust.
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    color: mutedDarkSoft,
                    marginTop: '14px',
                    letterSpacing: '0.04em',
                  }}
                >
                  Something we actually believe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section style={{ background: ink, color: cream, padding: '70px 0' }}>
        <div style={container}>
          <div
            className="g-cards-3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
          >
            {[
              { title: 'Services', desc: 'What we do and what it costs', href: '/services' },
              { title: 'Portfolio', desc: 'Six projects with real numbers', href: '/portfolio' },
              { title: 'Pricing', desc: 'Published rates, no hidden costs', href: '/pricing' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  border: `1px solid ${lineDark}`,
                  borderRadius: '12px',
                  padding: '26px 24px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '19px',
                    fontWeight: 700,
                    color: gold,
                    marginBottom: '8px',
                  }}
                >
                  {l.title}
                </div>
                <div style={{ fontSize: '14px', color: mutedDarkSoft }}>{l.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}