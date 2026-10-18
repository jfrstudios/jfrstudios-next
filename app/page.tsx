export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#07070A',
        color: '#F5F5F2',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ maxWidth: '900px', textAlign: 'center' }}>
        <p
          style={{
            color: '#BEF264',
            fontSize: '14px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontWeight: 500,
          }}
        >
          ● Available for new projects — 2026
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            margin: 0,
          }}
        >
          We craft digital <span style={{ color: '#BEF264' }}>experiences</span>
          <br />
          <span style={{ color: 'rgba(245, 245, 242, 0.4)' }}>
            that ignite brands.
          </span>
        </h1>
        <p
          style={{
            marginTop: '32px',
            fontSize: '18px',
            color: 'rgba(245, 245, 242, 0.7)',
            maxWidth: '640px',
            margin: '32px auto 0',
            lineHeight: 1.6,
          }}
        >
          JFR Studios is a bold digital studio crafting websites, brands and
          experiences that move people. We combine strategy, creativity and
          technology to move businesses forward.
        </p>
        <div
          style={{
            marginTop: '48px',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:hello@jfrstudios.store"
            style={{
              padding: '14px 28px',
              borderRadius: '9999px',
              background: '#BEF264',
              color: '#07070A',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Start a project
          </a>
          <a
            href="#services"
            style={{
              padding: '14px 28px',
              borderRadius: '9999px',
              border: '1px solid rgba(245, 245, 242, 0.2)',
              color: '#F5F5F2',
              fontWeight: 500,
              fontSize: '14px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            See our work
          </a>
        </div>
        <div
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1px',
            background: 'rgba(245, 245, 242, 0.1)',
            border: '1px solid rgba(245, 245, 242, 0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {[
            { v: '40+', l: 'Projects shipped' },
            { v: '6 wks', l: 'Avg. delivery' },
            { v: '98%', l: 'Client retention' },
            { v: '15+', l: 'Industries served' },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                background: '#07070A',
                padding: '32px 16px',
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#BEF264',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {s.v}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(245, 245, 242, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  margin: '12px 0 0',
                }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
        <footer
          style={{
            marginTop: '64px',
            fontSize: '13px',
            color: 'rgba(245, 245, 242, 0.4)',
          }}
        >
          © 2026 JFR Studios. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
