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
  EMAIL,
  WHATSAPP,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shop — Ready-Made Brand Kits & Templates',
  description:
    'Buy JFR Studios digital products: brand starter kits, social templates, website UI kits and motion packs. Built from real client projects, ready to customise.',
  alternates: { canonical: '/shop' },
  openGraph: {
    title: 'Shop — JFR Studios',
    description: 'Brand kits, templates and design assets built from real client work.',
    url: '/shop',
  },
};

type Product = {
  name: string;
  price: string;
  was?: string;
  desc: string;
  includes: string[];
  accent: string;
  badge?: string;
};

const products: Product[] = [
  {
    name: 'Brand Starter Kit',
    price: '$89',
    desc: 'A complete identity foundation for a new business, built the same way we build for clients.',
    includes: [
      'Primary + secondary logo marks',
      'Colour system with 6 palettes',
      'Typography pairing guide',
      'Social avatar templates',
      'Brand voice worksheet',
    ],
    accent: 'linear-gradient(135deg, #3B2C0E, #6B4E14)',
    badge: 'Best seller',
  },
  {
    name: 'Social Template Pack',
    price: '$49',
    desc: 'Twenty editable post and story templates that stop your feed from looking like everyone else.',
    includes: [
      '20 Figma templates',
      'Instagram post + story',
      'LinkedIn carousel',
      'Reusable highlight covers',
      'Light and dark variants',
    ],
    accent: 'linear-gradient(135deg, #3A2A10, #7A5A1C)',
  },
  {
    name: 'Website UI Kit',
    price: '$129',
    desc: 'The building blocks we use ourselves: hero sections, pricing tables, team blocks, footers.',
    includes: [
      '42 Figma sections',
      'Desktop and mobile frames',
      'Light and dark themes',
      'Auto-layout components',
      'Free lifetime updates',
    ],
    accent: 'linear-gradient(135deg, #2E2409, #5E4510)',
  },
  {
    name: 'Motion Graphics Pack',
    price: '$149',
    desc: 'Logo reveals, lower thirds and scroll animations for brands that need to move.',
    includes: [
      '24 After Effects presets',
      'Logo reveal templates',
      'Lower third set',
      'Scroll animation rigs',
      '4K export presets',
    ],
    accent: 'linear-gradient(135deg, #332810, #6E5314)',
  },
  {
    name: 'Photography Preset Pack',
    price: '$39',
    desc: 'Twenty-four colour presets matched to the warm, low-light look we shoot and edit in.',
    includes: [
      '24 presets for Lightroom',
      'Mobile versions included',
      'Skin-tone safe',
      'Before and after guide',
    ],
    accent: 'linear-gradient(135deg, #352A11, #71561A)',
  },
  {
    name: 'Stationery Suite',
    price: '$29',
    desc: 'Business card, letterhead and compliment slip templates that print cleanly every time.',
    includes: [
      'Business card front and back',
      'A4 letterhead',
      'Compliment slip',
      'Print-ready PDF and AI',
      'CMYK colour setup',
    ],
    accent: 'linear-gradient(135deg, #312512, #685016)',
  },
];

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

export default function ShopPage() {
  return (
    <>
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
            Shop
            <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
          </div>
          <h1 style={{ ...h1, maxWidth: '760px' }}>
            Assets we built for clients, now available to you.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: mutedDark, maxWidth: '640px', margin: 0 }}>
            Every kit here came out of a real project. We built it for a client,
            stripped it back, and packaged it so you can start from something
            that already works instead of a blank canvas.
          </p>
        </div>
      </section>

      <section style={{ background: creamBright, color: ink, padding: '90px 0' }}>
        <div style={container}>
          <div
            className="g-cards-3"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
          >
            {products.map((p) => (
              <div
                key={p.name}
                style={{
                  background: '#fff',
                  border: `1px solid ${lineLight}`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    aspectRatio: '4 / 3',
                    background: p.accent,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px',
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(circle at 30% 25%, rgba(247,220,155,0.28), transparent 55%)',
                    }}
                  />
                  {p.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: gold,
                        color: ink,
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        padding: '5px 11px',
                        borderRadius: '999px',
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <span
                    style={{
                      position: 'relative',
                      fontFamily: 'Georgia, serif',
                      fontSize: '30px',
                      fontWeight: 700,
                      color: gold,
                      lineHeight: 1,
                    }}
                  >
                    {p.price}
                  </span>
                </div>

                <div style={{ padding: '24px 22px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '19px',
                      fontWeight: 700,
                      margin: '0 0 10px',
                      color: ink,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: mutedLight,
                      margin: '0 0 18px',
                    }}
                  >
                    {p.desc}
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '9px',
                      flex: 1,
                    }}
                  >
                    {p.includes.map((inc) => (
                      <li
                        key={inc}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13.5px',
                          color: mutedLight,
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: gold, flexShrink: 0, marginTop: '2px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M4 12 L9 17 L20 6"
                              stroke={gold}
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Hi JFR Studios, I would like to buy the ${p.name} (${p.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '9px',
                      padding: '13px 22px',
                      borderRadius: '6px',
                      background: gold,
                      color: ink,
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    Buy on WhatsApp <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: '34px',
              fontSize: '13.5px',
              color: mutedLightSoft,
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Payment is handled over WhatsApp so we can issue you a proper invoice.
            Every purchase includes free updates and email support for a year.
            Prefer email? Write to{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: gold, fontWeight: 600 }}>
              {EMAIL}
            </a>
          </p>
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
              <h2 style={{ ...h2, margin: 0, color: cream }}>
                Need something custom instead?
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: mutedDarkSoft,
                  maxWidth: '560px',
                  margin: '14px 0 0',
                }}
              >
                These kits cover the common cases. If your brand needs something
                none of them fits, we build it from scratch.
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
              Request custom work <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}