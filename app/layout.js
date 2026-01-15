import './globals.css'

export const metadata = {
  title: 'Lingo Journal',
  description: 'Master any language through daily journaling with AI-powered feedback',
  icons: {
    icon: '/app-icon.png',
    apple: '/app-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
