import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const OG_IMAGE =
  'https://27207d2309f319f969ea5ca92b9d1685.cdn.bubble.io/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1763113267722x641623932050546200/Bolt%20icon.jpg'

export const metadata: Metadata = {
  // ─── Core identity ────────────────────────────────────────────────────────
  title: 'Bolt AI Web Designer',
  description:
    'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
  referrer: 'origin',
  metadataBase: new URL('https://boltai.dev'),
  alternates: {
    canonical: 'https://boltai.dev/',
  },

  // ─── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    title: 'Bolt AI- AI Web App Designer',
    siteName: 'Bolt AI',
    description:
      'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
    url: 'https://boltai.dev/',
    type: 'website',
    images: [{ url: OG_IMAGE, alt: 'Bolt AI' }],
  },

  // ─── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Bolt AI- AI Web App Designer',
    // twitter:site_name is non-standard; Next.js exposes `site` for @handle.
    // The raw tag is injected manually in <head> below.
    description:
      'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
    images: [OG_IMAGE],
  },

  // ─── Favicon ──────────────────────────────────────────────────────────────
  icons: {
    icon: [{ url: '/favicon.jpg', type: 'image/jpeg' }],
  },

  // ─── Extra tags Next.js doesn't have first-class support for ──────────────
  other: {
    // rel="image_src" (legacy share image tag)
    image_src: OG_IMAGE,
    // AJAX crawling fragment hint (legacy but preserved from original)
    fragment: '!',
    // twitter:site_name (non-standard, injected as <meta> via `other`)
    'twitter:site_name': 'Bolt AI',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-[#f5f7fa]`}>
      <head>
        {/* IE compatibility ─ Next.js Metadata API doesn't expose http-equiv directly */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        {/* ── Google Analytics 4 ──────────────────────────────────────────────
            IMPORTANT: Keep ID G-NRXCC6HWBC exactly.
            Do NOT create a new GA4 property — this would break historical data.
            Placement: <head> as required by the SEO preservation doc.
        ───────────────────────────────────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRXCC6HWBC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NRXCC6HWBC');`}
        </Script>

        {/* ── WebSite Schema (JSON-LD) ─────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Bolt AI',
              url: 'https://boltai.dev/',
              description:
                'BoltAI is a free AI Web App Builder that helps you transform your website ideas to web pages using AI.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://boltai.dev/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* ── FAQPage Schema (JSON-LD) — enables rich FAQ snippets in Google ─ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Bolt AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bolt AI is an advanced online platform that uses artificial intelligence to help designers, developers, and startups create UI/UX designs, wireframes, and interactive prototypes quickly and effortlessly.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does Bolt AI work?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bolt AI uses generative AI models trained on thousands of design patterns and best practices. Simply describe your idea or upload design references, and the platform generates tailored prototypes or wireframes that match your vision.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Who can use Bolt AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bolt AI is designed for product designers, developers, entrepreneurs, agencies, and anyone looking to bring digital product ideas to life—no design experience required.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What can I create with Bolt AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can generate website layouts, mobile app designs, dashboard interfaces, landing pages, wireframes, and even clickable prototypes ready for presentation or development handoff.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I customize the AI-generated designs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! Bolt AI provides editable components and an intuitive drag-and-drop editor, allowing you to tweak colors, typography, spacing, and layouts to match your brand style.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does Bolt AI support collaboration?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. Teams can share, comment, and collaborate on designs in real time, making it easy to gather feedback and iterate faster.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I export my designs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Bolt AI allows you to export your projects in multiple formats, including Figma, Sketch, PNG, SVG, and interactive prototype links.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How accurate are the AI-generated wireframes?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Bolt AI's models are trained on modern design principles, ensuring that generated wireframes are functional, consistent, and ready for refinement. You can easily adjust them to suit your project's needs.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Bolt AI suitable for beginners?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Definitely. Bolt AI's interface is user-friendly and doesn't require prior design experience. Beginners can use text prompts to generate high-quality UI concepts within minutes.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does Bolt AI integrate with other design tools?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Bolt AI integrates with popular tools like Figma, Adobe XD, and Notion, as well as developer platforms for smoother design-to-development handoff.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What pricing plans does Bolt AI offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bolt AI offers a free plan with limited exports and premium plans with advanced AI features, unlimited projects, and team collaboration options. You can check the pricing page for details.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How secure is my data on Bolt AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your privacy and data security are top priorities. Bolt AI uses encrypted connections, secure cloud storage, and strict access controls to keep your projects safe and confidential.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
