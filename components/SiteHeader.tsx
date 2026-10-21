'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  container,
  cream,
  gold,
  lineDark,
  lineDarkSoft,
  ink,
  navItems,
  EMAIL,
} from '@/lib/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 0',
        background: 'rgba(10, 10, 10, 0.78)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        borderBottom: `1px solid ${lineDark}`,
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
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="JFR Studios" style={{ height: '42px', width: 'auto' }} />
        </Link>

        <nav
          aria-label="Primary"
          className="desktop-nav"
          style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
        >
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                  color: active ? gold : cream,
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: active ? `2px solid ${gold}` : '2px solid transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hide-mobile"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '11px 22px',
            borderRadius: '999px',
            border: `1px solid ${gold}`,
            color: gold,
            fontWeight: 600,
            fontSize: '13px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Let&apos;s Talk <span aria-hidden>&rarr;</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="mobile-nav-trigger"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'transparent',
            border: `1px solid ${lineDark}`,
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: gold,
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: gold,
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: gold,
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          style={{
            ...container,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            paddingTop: '12px',
            paddingBottom: '20px',
            borderTop: `1px solid ${lineDark}`,
            marginTop: '12px',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: cream,
                textDecoration: 'none',
                padding: '13px 0',
                borderBottom: `1px solid ${lineDarkSoft}`,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '18px',
              padding: '14px 22px',
              borderRadius: '999px',
              background: gold,
              color: ink,
              fontWeight: 700,
              fontSize: '13px',
              textDecoration: 'none',
            }}
          >
            Let&apos;s Talk <span aria-hidden>&rarr;</span>
          </a>
        </nav>
      )}
    </header>
  );
}