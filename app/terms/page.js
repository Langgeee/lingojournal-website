import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Lingo Journal',
}

export default function Terms() {
  return (
    <div className="container">
      <div className="card">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <h1>Terms of Service</h1>
        <p className="updated">Last updated: December 2025</p>

        <p>Welcome to Lingo Journal. By using our app, you agree to these Terms of Service.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Lingo Journal, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the app.</p>

        <h2>2. Description of Service</h2>
        <p>Lingo Journal is a language learning journal app that provides:</p>
        <ul>
          <li>A platform to write journal entries in your target language</li>
          <li>AI-powered feedback and corrections</li>
          <li>Vocabulary saving and flashcard features</li>
          <li>Optional iCloud synchronization</li>
        </ul>
        <p><strong>Language Support:</strong> The app currently supports Chinese speakers learning English. Support for additional languages may be added in future updates.</p>

        <h2>3. User Accounts</h2>
        <ul>
          <li>You must sign in with Apple to use the app</li>
          <li>You are responsible for maintaining the security of your account</li>
          <li>If you are under 18, you should have parental consent to use this app</li>
        </ul>

        <h2>4. Subscription and Payments</h2>
        <ul>
          <li>Lingo Journal offers a free tier with limited AI usage</li>
          <li>Premium subscriptions are available for unlimited access</li>
          <li>Subscriptions are billed through Apple App Store</li>
          <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
          <li>You can manage and cancel subscriptions in your Apple ID settings</li>
        </ul>

        <h2>5. User Content</h2>
        <ul>
          <li>You retain ownership of all content you create in the app</li>
          <li>You grant us a limited license to process your content to provide the service (e.g., AI corrections)</li>
          <li>You are responsible for the content you create</li>
          <li>Do not use the app for illegal or harmful purposes</li>
        </ul>

        <h2>6. AI-Generated Content</h2>
        <ul>
          <li>AI corrections and suggestions are provided for educational purposes</li>
          <li>We do not guarantee the accuracy of AI-generated content</li>
          <li>AI responses should not be considered professional language instruction</li>
        </ul>

        <h2>7. Prohibited Uses</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app for any illegal purpose</li>
          <li>Attempt to reverse engineer the app</li>
          <li>Abuse the AI features or attempt to bypass usage limits</li>
          <li>Share your account with others</li>
        </ul>

        <h2>8. Termination</h2>
        <p>We reserve the right to suspend or terminate your account if you violate these terms. You may delete your account at any time from the app settings.</p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>The app is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.</p>

        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app.</p>

        <h2>11. Changes to Terms</h2>
        <p>We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.</p>

        <h2>12. Contact</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>Email: <a href="mailto:langlangdev@gmail.com">langlangdev@gmail.com</a></p>
      </div>
    </div>
  )
}
