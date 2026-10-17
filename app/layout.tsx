import type { Metadata, Viewport } from 'next';
import { DM_Sans, Syne } from 'next/font/google';
import { LenisProvider } from '@/components/animations/LenisProvider';
import './globals.css';

// ===== Fonts =====
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
});

// ===== Site metadata =====
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'JFR Studios';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Bold digital studio for ambitious brands`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'JFR Studios is a bold digital agency crafting websites, brands and experiences that move people. Web development, branding, social media, and graphic design.',
  keywords: [
    'digital agency',
    'web development',
    'branding',
    'social media',
    'graphic design',
    'creative studio',
    'JFR Studios',
  ],
  authors: [{ name: 'JFR Studios' }],
  creator: 'JFR Studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Bold digital studio for ambitious brands`,
    description:
      'We craft digital experiences that move people. Web development, branding, social media, and graphic design.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Bold digital studio`,
    description:
      'We craft digital experiences that move people. Web, branding, social media, graphic design.',
    images: ['/og-image.jpg'],
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
};

export const viewport: Viewport = {
  themeColor: '#07070A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-ink-950 text-cream-50 antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}