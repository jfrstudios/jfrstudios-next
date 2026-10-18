/**
 * Studio placeholder.
 * The full Sanity Studio will be re-enabled once we set up the CMS project.
 */
export default function StudioPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#07070A',
        color: '#F5F5F2',
        fontFamily: 'system-ui, sans-serif',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Studio — Coming Soon</h1>
        <p style={{ color: 'rgba(245, 245, 242, 0.6)' }}>
          The CMS will be available here once the project is configured.
        </p>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';