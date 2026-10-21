'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import {
  ink,
  inkWarm,
  cream,
  creamBright,
  gold,
  goldLight,
  goldDark,
  mutedDark,
  mutedDarkSoft,
  lineDark,
  lineDarkSoft,
  mutedLight,
  mutedLightSoft,
  lineLight,
  container,
  services,
  projects,
  stats,
  values,
  EMAIL,
  PHONE,
} from '@/lib/site';

const imgHero = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=720&fit=crop';
const imgAbout = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=720&fit=crop';
const imgLeaf = 'https://images.unsplash.com/photo-1545244125-b4eff5fa1df6?w=600&h=600&fit=crop';

const portfolio = projects.slice(0, 4);

const blog = [
  {
    tag: 'Design',
    date: 'Apr 10, 2025',
    title: '10 Modern Web Design Trends for 2025',
    img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
  },
  {
    tag: 'Social Media',
    date: 'Apr 20, 2025',
    title: 'How to Grow Your Brand on Social Media',
    img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop',
  },
  {
    tag: 'Marketing',
    date: 'Apr 18, 2025',
    title: 'Digital Marketing Strategies That Actually Work',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    tag: 'Content',
    date: 'Apr 12, 2025',
    title: 'The Power of Short Videos for Your Brand',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
  },
];

const features = values;
// Service icon SVG path helper
function Icon({ name }: { name: string }) {
  const stroke = gold;
  switch (name) {
    case 'web':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M8 6 L2 12 L8 18 M16 6 L22 12 L16 18 M14 4 L10 20" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'social':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke={stroke} strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke={stroke} strokeWidth="1.6" />
          <circle cx="17.5" cy="6.5" r="0.8" fill={stroke} />
        </svg>
      );
    case 'brand':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18 L6 22 L7 15 L2 10 L9 9 Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case 'design':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M12 19 L7 22 L8 16 L3 12 L9 11 L12 5 L15 11 L21 12 L16 16 L17 22 Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case 'marketing':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M3 11 L21 3 V13 L11 21 Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="16" cy="8" r="1.5" fill={stroke} />
        </svg>
      );
    case 'content':
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke={stroke} strokeWidth="1.6" />
          <path d="M10 9 L15 12 L10 15 Z" fill={stroke} />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        style={{
          paddingTop: '170px',
          paddingBottom: '80px',
          background: ink,
          color: cream,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="g-hero" style={{ ...container, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: gold,
                marginBottom: '28px',
              }}
            >
              <span style={{ display: 'inline-block', width: '40px', height: '1px', background: gold }} />
              Digital Agency
            </div>
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(2.5rem, 5.4vw, 4.6rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                margin: '0 0 28px',
                color: cream,
              }}
            >
              Ideas Into <span style={{ color: gold, fontStyle: 'italic' }}>Powerful</span> Digital Experiences
            </h1>
            <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: mutedDark, maxWidth: '560px', margin: '0 0 40px' }}>
              JFR Studios is a creative digital agency helping brands grow with modern design, strategic marketing and powerful digital solutions.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="#services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 32px',
                  borderRadius: '6px',
                  background: gold,
                  color: ink,
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Explore Our Services <span aria-hidden>&#8594;</span>
              </a>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              aspectRatio: '4 / 3',
              border: `1px solid ${lineDark}`,
              background: inkWarm,
            }}
          >
            <img
              src={imgHero}
              alt="JFR Studios digital workspace"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }}
            />
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(212,164,55,0.18), transparent 50%, rgba(10,10,10,0.4))',
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: ink, borderTop: `1px solid ${lineDark}`, borderBottom: `1px solid ${lineDark}`, padding: '40px 0' }}>
        <div className="g-stats" style={{ ...container, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {[
            { num: '100+', label: 'Projects Completed', icon: 'briefcase' },
            { num: '50+', label: 'Happy Clients', icon: 'smile' },
            { num: '5+', label: 'Years Experience', icon: 'trophy' },
            { num: '100%', label: 'Client Satisfaction', icon: 'heart' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '8px 18px', borderRight: `1px solid ${lineDark}` }}>
              <span style={{ color: gold, fontSize: '28px' }}>
                {s.icon === 'briefcase' && (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke={gold} strokeWidth="1.6" /><path d="M9 7 V5 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V7" stroke={gold} strokeWidth="1.6" /></svg>
                )}
                {s.icon === 'smile' && (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={gold} strokeWidth="1.6" /><circle cx="9" cy="10" r="0.9" fill={gold} /><circle cx="15" cy="10" r="0.9" fill={gold} /><path d="M8 14 Q12 18 16 14" stroke={gold} strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>
                )}
                {s.icon === 'trophy' && (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 4 H17 V9 a5 5 0 0 1 -10 0 V4 Z M7 6 H4 V8 a3 3 0 0 0 3 3 M17 6 H20 V8 a3 3 0 0 1 -3 3 M9 19 H15 M10 14 H14 V19" stroke={gold} strokeWidth="1.6" strokeLinejoin="round" fill="none" /></svg>
                )}
                {s.icon === 'heart' && (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 20 S4 14 4 8.5 A4.5 4.5 0 0 1 12 7 a4.5 4.5 0 0 1 8 1.5 C20 14 12 20 12 20 Z" stroke={gold} strokeWidth="1.6" strokeLinejoin="round" fill="none" /></svg>
                )}
              </span>
              <div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: 700, color: cream, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '12px', color: mutedDarkSoft, marginTop: '4px', letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: creamBright, color: ink, padding: '110px 0' }}>
        <div style={container}>
          <div className="g-services" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: gold,
                  marginBottom: '20px',
                }}
              >
                Our Services
                <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  margin: '0 0 22px',
                  color: ink,
                }}
              >
                Complete Digital Solutions For Your Brand
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: mutedLight, maxWidth: '440px', margin: '0 0 28px' }}>
                We help businesses build a strong online presence with creative design, smart strategy and result-driven solutions.
              </p>
              <a
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 26px',
                  borderRadius: '6px',
                  border: `1.5px solid ${gold}`,
                  color: gold,
                  fontWeight: 600,
                  fontSize: '12.5px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                View All Services <span aria-hidden>&#8594;</span>
              </a>
            </div>

            <div className="g-cards-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {services.map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: '#fff',
                    border: `1px solid ${lineLight}`,
                    borderRadius: '10px',
                    padding: '26px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <Icon name={s.icon} />
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', fontWeight: 700, margin: 0, color: ink, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', color: mutedLight, margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
                  <a href="#contact" style={{ marginTop: 'auto', color: gold, fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Learn More <span aria-hidden>&#8594;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about-us" style={{ background: ink, color: cream, padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="g-about" style={{ ...container, display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '60px', alignItems: 'center' }}>
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', border: `1px solid ${lineDark}` }}>
            <img src={imgAbout} alt="JFR Studios team workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.78) contrast(1.08)' }} />
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(212,164,55,0.15), transparent 60%)' }} />
          </div>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: gold, marginBottom: '20px' }}>
              About Us
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 24px' }}>
              Creative Minds <span style={{ color: gold, fontStyle: 'italic' }}>Behind Your Success</span>.
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: mutedDark, margin: '0 0 28px' }}>
              JFR Studios is a team of designers, developers and digital marketers who believe in the power of ideas. We turn your vision into digital experiences that connect, engage and grow.
            </p>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 28px', borderRadius: '6px', border: `1.5px solid ${gold}`, color: gold, fontWeight: 600, fontSize: '12.5px', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', marginBottom: '40px' }}>
              Learn More <span aria-hidden>&#8594;</span>
            </a>

            <div className="g-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 28px', borderLeft: `2px solid ${gold}`, paddingLeft: '24px' }}>
              {features.map((f) => (
                <div key={f.title}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2 L14 9 L21 10 L16 14 L18 21 L12 17 L6 21 L8 14 L3 10 L10 9 Z" stroke={gold} strokeWidth="1.5" strokeLinejoin="round" /></svg>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: cream, margin: 0 }}>{f.title}</h4>
                  </div>
                  <p style={{ fontSize: '13px', color: mutedDarkSoft, margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ background: creamBright, color: ink, padding: '110px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: gold, marginBottom: '18px' }}>
                Our Portfolio
                <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
              </div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 14px' }}>
                Our Latest Projects
              </h2>
              <p style={{ fontSize: '14.5px', color: mutedLight, margin: 0, maxWidth: '480px' }}>
                A glimpse of the brands we&apos;ve helped create, design and grow.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['All', 'Web Design', 'Social Media', 'Branding', 'Content Creation'].map((tab, i) => (
                <span key={tab} style={{ padding: '8px 18px', fontSize: '12.5px', fontWeight: 600, borderRadius: '999px', background: i === 0 ? gold : 'transparent', color: i === 0 ? ink : mutedLight, border: i === 0 ? `1px solid ${gold}` : `1px solid ${lineLight}`, cursor: 'pointer' }}>
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <div className="g-cards-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '22px' }}>
            {portfolio.map((p) => (
              <div key={p.title} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4 / 5', background: inkWarm, border: `1px solid ${lineLight}`, cursor: 'pointer' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.78)' }} />
                <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.85) 100%)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 18px', color: cream }}>
                  <div style={{ fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: gold, marginBottom: '8px', fontWeight: 600 }}>{p.tag}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 700, margin: 0 }}>{p.title}</h3>
                    <span aria-hidden style={{ color: gold, fontSize: '18px' }}>&#8594;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: ink, color: cream, padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', right: '-80px', top: '-40px', width: '420px', height: '420px', background: `url(${imgLeaf}) center/cover no-repeat`, opacity: 0.18, filter: 'grayscale(0.3) hue-rotate(20deg)' }} />
        <div style={{ ...container, position: 'relative' }}>
          <div className="g-testimonial" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: gold, marginBottom: '20px' }}>
                Our Testimonials
                <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
              </div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 30px' }}>
                What Our Clients Say
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: mutedDark, fontStyle: 'italic', margin: '0 0 28px' }}>
                &ldquo;JFR Studios delivered more than we expected &mdash; creative designs, clear communication and real results. Highly recommend!&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: `linear-gradient(135deg, ${gold}, ${goldDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ink, fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '18px' }}>
                  SK
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>Sarah Khan</div>
                  <div style={{ fontSize: '12.5px', color: mutedDarkSoft }}>Business Owner</div>
                  <div style={{ color: gold, fontSize: '13px', marginTop: '4px', letterSpacing: '0.15em' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button aria-label="Previous testimonial" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'transparent', border: `1px solid ${lineDark}`, color: gold, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span aria-hidden style={{ fontSize: '18px' }}>&#8592;</span>
                </button>
                <button aria-label="Next testimonial" style={{ width: '42px', height: '42px', borderRadius: '50%', background: gold, border: 'none', color: ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span aria-hidden style={{ fontSize: '18px' }}>&#8594;</span>
                </button>
              </div>
            </div>

            <div style={{ position: 'relative', padding: '50px 40px', borderRadius: '14px', border: `1px solid ${lineDark}`, background: 'rgba(245,240,229,0.04)' }}>
              <div aria-hidden style={{ position: 'absolute', top: '20px', left: '30px', fontFamily: 'Georgia, serif', fontSize: '90px', color: gold, lineHeight: 1, opacity: 0.4 }}>
                &ldquo;
              </div>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontStyle: 'italic', color: gold, lineHeight: 1.3, margin: '30px 0 0', fontWeight: 600 }}>
                Great design<br />builds trust.
              </p>
              <div style={{ marginTop: '24px', fontSize: '13px', color: mutedDarkSoft, letterSpacing: '0.04em' }}>
                &mdash; A JFR Studios promise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ background: creamBright, color: ink, padding: '110px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: gold, marginBottom: '18px' }}>
                Our Blog
                <span style={{ display: 'inline-block', width: '30px', height: '1px', background: gold }} />
              </div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 14px' }}>
                Latest Insights &amp; <span style={{ color: gold, fontStyle: 'italic' }}>Trends</span>
              </h2>
              <p style={{ fontSize: '14.5px', color: mutedLight, margin: 0, maxWidth: '480px' }}>
                Tips, ideas and updates to help you grow in the digital world.
              </p>
            </div>
            <a href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: gold, fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>
              View All Articles <span aria-hidden>&#8594;</span>
            </a>
          </div>

          <div className="g-cards-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '22px' }}>
            {blog.map((b) => (
              <article key={b.title} style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', border: `1px solid ${lineLight}` }}>
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: inkWarm }}>
                  <img src={b.img} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '18px 18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', letterSpacing: '0.06em', color: mutedLightSoft, marginBottom: '10px' }}>
                    <span style={{ color: gold, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{b.tag}</span>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: mutedLightSoft, display: 'inline-block' }} />
                    <span>{b.date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 700, lineHeight: 1.35, margin: 0, color: ink }}>
                    {b.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: ink, color: cream, padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="g-cta" style={{ ...container, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 22px' }}>
              Let&apos;s Create Something <span style={{ color: gold, fontStyle: 'italic' }}>Amazing Together</span>.
            </h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: mutedDark, maxWidth: '520px', margin: 0 }}>
              Ready to take your brand to the next level? Get in touch with us today and let&apos;s turn your ideas into reality.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <a href="mailto:hello@jfrstudios.store" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px 32px', borderRadius: '6px', background: gold, color: ink, fontWeight: 700, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Contact Us <span aria-hidden>&#8594;</span>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: mutedDark, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 4 H9 L11 9 L8.5 10.5 a12 12 0 0 0 6 6 L16 14 L21 16 V20 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2 Z" stroke={gold} strokeWidth="1.6" strokeLinejoin="round" fill="none" /></svg>
                +92 300 1234567
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: mutedDark, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke={gold} strokeWidth="1.6" /><path d="M3 7 L12 13 L21 7" stroke={gold} strokeWidth="1.6" fill="none" /></svg>
                hello@jfrstudios.store
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: mutedDark, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21 s-7 -7 -7 -12 a7 7 0 0 1 14 0 c0 5 -7 12 -7 12 Z" stroke={gold} strokeWidth="1.6" fill="none" /><circle cx="12" cy="9" r="2.4" stroke={gold} strokeWidth="1.6" fill="none" /></svg>
                Lahore, Pakistan
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

