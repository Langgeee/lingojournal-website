import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f5f0 0%, #e8e8e0 100%)',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <img
          src="/app-icon.png"
          alt="Lingo Journal"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '24px',
            margin: '0 auto 30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        />

        <h1 style={{ color: '#2C3E50', fontSize: '2.5em', marginBottom: '15px' }}>
          Lingo Journal
        </h1>

        <p style={{ color: '#7B1FA2', fontSize: '1.4em', fontWeight: '600', marginBottom: '15px' }}>
          Capture life, Grow your language.
        </p>
        <p style={{
          color: '#666',
          fontSize: '1.1em',
          marginBottom: '40px',
          lineHeight: '1.7'
        }}>
          With AI assistance, write journals in your target language. Turn expression into the shortcut to truly mastering a new language.
        </p>

        <div style={{ marginBottom: '40px' }}>
          <a href="https://apps.apple.com/au/app/lingo-journal/id6757097283" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              style={{ height: '54px' }}
            />
          </a>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{
            color: '#3498db',
            padding: '12px 24px',
            border: '2px solid #3498db',
            borderRadius: '8px',
            textDecoration: 'none'
          }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{
            color: '#3498db',
            padding: '12px 24px',
            border: '2px solid #3498db',
            borderRadius: '8px',
            textDecoration: 'none'
          }}>
            Terms of Service
          </Link>
        </div>

        <footer style={{ marginTop: '60px', color: '#999', fontSize: '0.9em' }}>
          <p>&copy; 2025 Lingo Journal. All rights reserved.</p>
          <p>Contact: <a href="mailto:langlangdev@gmail.com" style={{ color: '#999' }}>langlangdev@gmail.com</a></p>
        </footer>
      </div>
    </div>
  )
}
