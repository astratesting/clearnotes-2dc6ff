import type { Metadata } from 'next';
import { Manrope, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-source-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clearnotes.app'),
  title: 'ClearNotes — Notes that organize themselves',
  description:
    'Write the way you think. ClearNotes sorts, tags, and connects your notes automatically — so you stop filing and start finding.',
  openGraph: {
    title: 'ClearNotes — Notes that organize themselves',
    description:
      'Write the way you think. ClearNotes sorts, tags, and connects your notes automatically.',
    url: 'https://clearnotes.app',
    siteName: 'ClearNotes',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'ClearNotes — Notes that organize themselves',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClearNotes — Notes that organize themselves',
    description:
      'Write the way you think. ClearNotes sorts, tags, and connects your notes automatically.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSans.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ClearNotes',
              url: 'https://clearnotes.app',
              logo: 'https://clearnotes.app/favicon.svg',
              description:
                'ClearNotes is an AI-powered note-taking app that organizes itself.',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
