import type { Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import './globals.css';

const fontPrimary = Geist({
  variable: '--font-family-primary',
  subsets: ['latin'],
  display: 'swap',
});

const fontSerif = Playfair_Display({
  variable: '--font-family-serif',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://devrenegades.com';
const siteName = 'dev renegades';
const siteDescription =
  'Hire senior software developers without agency overhead. 10+ years of experience, direct access to experts, transparent pricing. Build applications with skilled professionals who deliver results.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'dev renegades - Senior Software Developers Without Agency Overhead',
    template: '%s | dev renegades',
  },
  description: siteDescription,
  keywords: [
    'senior software developers',
    'hire developers',
    'software development',
    'no agency overhead',
    'experienced developers',
    'custom software development',
    'web application development',
    'senior engineers',
    'tech consultants',
    'software experts',
    'direct developer access',
    'transparent pricing developers',
  ],
  authors: [{ name: 'dev renegades' }],
  creator: 'dev renegades',
  publisher: 'dev renegades',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'dev renegades - Senior Software Developers Without Agency Overhead',
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'dev renegades - Senior Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dev renegades - Senior Software Developers Without Agency Overhead',
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@devrenegades',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${fontPrimary.variable} ${fontSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
