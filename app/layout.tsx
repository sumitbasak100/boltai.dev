import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bolt AI - AI Web App Designer',
  description: 'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
  openGraph: {
    title: 'Bolt AI - AI Web App Designer',
    siteName: 'Bolt AI',
    description: 'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolt AI - AI Web App Designer',
    description: 'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-[#f5f7fa]`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
