import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Lingo Journal',
}

export default function Privacy() {
  return (
    <div className="container">
      <div className="card">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: December 2024</p>

        <p>Lingo Journal (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>

        <h2>Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> When you sign in with Apple, we receive your Apple ID, email address (if you choose to share it), and name.</li>
          <li><strong>User Content:</strong> Journal entries, saved vocabulary, and learning progress you create within the app.</li>
          <li><strong>Audio Data:</strong> Voice recordings when you use speech-to-text features (processed locally or via our AI service).</li>
          <li><strong>Photos:</strong> Images you choose to add to your journal entries.</li>
          <li><strong>Usage Data:</strong> API usage statistics for subscription management.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide AI-powered language learning feedback on your journal entries</li>
          <li>To sync your data across devices via iCloud (optional)</li>
          <li>To manage your subscription and usage quota</li>
          <li>To improve our services</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <ul>
          <li>Your journal entries are stored locally on your device in an encrypted database</li>
          <li>If you enable iCloud sync, data is stored in your personal iCloud account</li>
          <li>Authentication tokens are stored securely using iOS Keychain</li>
          <li>We use HTTPS for all network communications</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>OpenAI:</strong> To provide AI-powered language corrections and feedback. Your text is sent to OpenAI&apos;s API for processing.</li>
          <li><strong>Apple Sign In:</strong> For authentication.</li>
          <li><strong>Apple iCloud:</strong> For optional data synchronization.</li>
          <li><strong>Apple StoreKit:</strong> For subscription management.</li>
        </ul>

        <h2>Data Retention</h2>
        <p>We retain your data for as long as your account is active. You can delete your account and all associated data at any time from the app settings.</p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Export your data</li>
          <li>Delete your account and all associated data</li>
          <li>Opt out of iCloud sync</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: <a href="mailto:support@lingojournal.app">support@lingojournal.app</a></p>
      </div>
    </div>
  )
}
