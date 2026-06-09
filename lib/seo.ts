import type { Metadata } from 'next';

interface PageSEO {
  title: string;
  description: string;
  path?: string;
}

export function generatePageMetadata({ title, description, path }: PageSEO): Metadata {
  const url = path ? `https://clearnotes.app${path}` : 'https://clearnotes.app';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'ClearNotes',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
    alternates: {
      canonical: url,
    },
  };
}
