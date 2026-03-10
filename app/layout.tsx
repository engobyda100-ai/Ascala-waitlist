import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dosis = Dosis({
  subsets: ["latin"],
  variable: '--font-dosis',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Ascala - AI-Powered Testing for SaaS Founders',
  description: 'Test your SaaS with AI personas before real users',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dosis.variable} font-sans antialiased bg-white text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
