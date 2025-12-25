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
        <p className="updated">Last updated: December 2025</p>

        <p>Lingo Journal (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>

        <h2>Data Storage - Your Data Stays Yours</h2>
        <p>Lingo Journal is designed with privacy in mind. Your data is stored in places you control:</p>
        <ul>
          <li><strong>Local Storage:</strong> All your journal entries, saved vocabulary, and learning progress are stored locally on your device.</li>
          <li><strong>Your iCloud Account:</strong> If you enable iCloud sync, data is stored in your personal iCloud account - not on our servers. We cannot access your iCloud data.</li>
          <li><strong>Photos:</strong> Images you add to journal entries are stored locally on your device and in your iCloud (if sync is enabled).</li>
        </ul>

        <h2>Information We Process</h2>
        <p>We only process the following information through our servers:</p>
        <ul>
          <li><strong>Authentication:</strong> When you sign in with Apple, we receive a user identifier to manage your account. Your email is optional and only used if you choose to share it.</li>
          <li><strong>AI Corrections:</strong> When you request AI feedback, your journal text is sent to OpenAI for processing. This is the only user content that leaves your device.</li>
          <li><strong>Usage Statistics:</strong> We track API usage to manage your subscription quota.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <ul>
          <li><strong>OpenAI:</strong> When you request AI corrections, your text is sent to OpenAI&apos;s API. OpenAI processes this data according to their privacy policy.</li>
          <li><strong>Apple Sign In:</strong> For secure authentication.</li>
          <li><strong>Apple iCloud:</strong> For optional data sync (stored in your personal iCloud account).</li>
          <li><strong>Apple StoreKit:</strong> For subscription management.</li>
        </ul>

        <h2>What We Do NOT Collect</h2>
        <ul>
          <li>We do not store your journal entries on our servers</li>
          <li>We do not have access to your iCloud data</li>
          <li>We do not track your location</li>
          <li>We do not use analytics or advertising SDKs</li>
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
        <p>Our app is an educational tool suitable for all ages. Since user data is stored locally on the device and in the user&apos;s personal iCloud account, we do not directly collect personal information from children. Parents should supervise their children&apos;s use of the app.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: <a href="mailto:langlangdev@gmail.com">langlangdev@gmail.com</a></p>
      </div>
    </div>
  )
}
