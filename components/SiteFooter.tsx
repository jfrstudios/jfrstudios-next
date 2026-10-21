import Link from 'next/link';
import type { CSSProperties } from 'react';
import {
  container,
  cream,
  gold,
  inkWarm,
  lineDark,
  mutedDark,
  mutedDarkSoft,
  navItems,
  services,
  EMAIL,
  PHONE,
} from '@/lib/site';

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/jfrstudios',
    d: 'M13 22 V12 H16 L16.5 8 H13 V6 a1 1 0 0 1 1 -1 H17 V2 H14 a4 4 0 0 0 -4 4 V8 H7 V12 H10 V22 Z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/jfrstudios',
    d: 'M7 3 H17 a4 4 0 0 1 4 4 V17 a4 4 0 0 1 -4 4 H7 a4 4 0 0 1 -4 -4 V7 a4 4 0 0 1 4 -4 Z M12 8 a4 4 0 1 0 0 8 a4 4 0 0 0 0 -8 Z M17.5 6.5 a1 1 0 1 0 0 2 a1 1 0 0 0 0 -2 Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/jfrstudios',
    d: 'M4 4 H8 V20 H4 Z M6 1.5 a2 2 0 1 0 0 4 a2 2 0 0 0 0 -4 Z M10 8 H14 V10 a4 4 0 0 1 7 2 V20 H17 V13 a2 2 0 0 0 -4 0 V20 H10 Z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@jfrstudios',
    d: 'M2 8 a3 3 0 0 1 3 -3 H19 a3 3 0 0 1 3 3 V16 a3 3 0 0 1 -3 3 H5 a3 3 0 0 1 -3 -3 Z M10 9 L15 12 L10 15 Z',
  },
];

const heading: CSSProperties = {
  fontFamily: 'Georgia, serif',
  fontSize: '14px',
  color: gold,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  marginBottom: '18px',
};

const linkStyle: CSSProperties = {
  color: mutedDark,
  fontSize: '13.5px',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '3px 0',
};

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: inkWarm,
        color: cream,
        padding: '70px 0 30px',
        borderTop: `1px solid ${lineDark}`,
      }}
    >
      <div style={container}>
        <div
          className="g-footer"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr',
            gap: '40px',
            paddingBottom: '50px',
            borderBottom: `1px solid ${lineDark}`,
          }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="JFR Studios"
              style={{ height: '44px', marginBottom: '20px' }}
            />
            <p
              style={{
                fontSize: '13.5px',
                color: mutedDarkSoft,
                lineHeight: 1.6,
                maxWidth: '280px',
                margin: 0,
              }}
            >
              A digital agency in Lahore, working with founders and marketing
              teams across Europe, North America and Australia.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '22px' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    border: `1px solid ${lineDark}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cream,
                    textDecoration: 'none',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d={s.d}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={heading}>Quick Links</h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={linkStyle}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={heading}>Our Services</h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} style={linkStyle}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={heading}>Get in touch</h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <li>
                <a href={`mailto:${EMAIL}`} style={linkStyle}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} style={linkStyle}>
                  {PHONE}
                </a>
              </li>
              <li style={{ color: mutedDarkSoft, fontSize: '13.5px' }}>
                Lahore, Pakistan
                <br />
                Working hours 09:00 to 19:00 PKT
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingTop: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12.5px',
            color: mutedDarkSoft,
          }}
        >
          <div>&copy; 2026 JFR Studios. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span aria-hidden>|</span>
            <span>Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}