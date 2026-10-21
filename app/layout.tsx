import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'JFR Studios — Digital Agency for Websites, Branding & Content',
    template: '%s | JFR Studios',
  },
  description:
    'JFR Studios is a digital agency in Lahore working with clients worldwide. We build websites, brand identities, social media campaigns and marketing that bring in customers.',
  keywords: [
    'digital agency Lahore',
    'web design agency',
    'brand identity design',
    'social media management',
    'content creation agency',
    'digital marketing agency',
    'freelance web developer Pakistan',
    'JFR Studios',
  ],
  authors: [{ name: 'JFR Studios' }],
  creator: 'JFR Studios',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'JFR Studios',
    title: 'JFR Studios — Digital Agency for Websites, Branding & Content',
    description:
      'We build websites, brand identities, social media campaigns and marketing that bring in customers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JFR Studios — Digital Agency for Websites, Branding & Content',
    description:
      'We build websites, brand identities, social media campaigns and marketing that bring in customers.',
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
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'JFR Studios',
  description:
    'Digital agency in Lahore, Pakistan working with clients across Europe, North America and Australia on websites, brand identity, social media and digital marketing.',
  url: SITE_URL,
  email: 'hello@jfrstudios.store',
  telephone: '+92-322-1001048',
  priceRange: '$$',
  areaServed: ['Worldwide'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://instagram.com/jfrstudios',
    'https://linkedin.com/company/jfrstudios',
    'https://facebook.com/jfrstudios',
    'https://youtube.com/@jfrstudios',
  ],
  knowsAbout: [
    'Web Design',
    'Web Development',
    'Brand Identity',
    'Social Media Management',
    'Graphic Design',
    'Digital Marketing',
    'Content Creation',
  ],
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
          background: '#0A0A0A',
          color: '#F5F0E5',
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          overflowX: 'hidden',
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}