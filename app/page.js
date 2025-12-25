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

        <p style={{ color: '#666', fontSize: '1.2em', marginBottom: '20px' }}>
          Capture life, Grow your English.
        </p>
        <p style={{
          color: '#888',
          fontSize: '0.95em',
          marginBottom: '40px',
          padding: '10px 20px',
          background: 'rgba(0,0,0,0.03)',
          borderRadius: '8px',
          display: 'inline-block'
        }}>
          Currently supports Chinese speakers learning English
        </p>

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

        <div style={{ marginTop: '40px' }}>
          <p style={{ color: '#999' }}>Coming soon to the App Store</p>
        </div>

        <footer style={{ marginTop: '60px', color: '#999', fontSize: '0.9em' }}>
          <p>&copy; 2025 Lingo Journal. All rights reserved.</p>
          <p>Contact: <a href="mailto:langlangdev@gmail.com" style={{ color: '#999' }}>langlangdev@gmail.com</a></p>
        </footer>
      </div>
    </div>
  )
}
