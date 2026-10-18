import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JFR Studios — Bold Digital Studio for Ambitious Brands',
  description:
    'JFR Studios is a bold digital studio crafting websites, brands and experiences that move people. Web development, branding, social media, and graphic design.',
  keywords: [
    'digital agency',
    'web development',
    'branding',
    'social media',
    'graphic design',
    'creative studio',
    'JFR Studios',
    'Pakistan',
  ],
  authors: [{ name: 'JFR Studios' }],
  creator: 'JFR Studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'JFR Studios — Bold Digital Studio for Ambitious Brands',
    description:
      'We craft digital experiences that move people. Web development, branding, social media, and graphic design.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JFR Studios — Bold Digital Studio',
    description:
      'We craft digital experiences that move people. Web, branding, social media, graphic design.',
  },
};

export const viewport: Viewport = {
  themeColor: '#07070A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: '#07070A',
          color: '#F5F5F2',
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}