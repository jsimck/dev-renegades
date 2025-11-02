import type { Metadata } from 'next';
import { Geist, Playfair_Display } from 'next/font/google';
import './globals.css';

const fontPrimary = Geist({
  variable: '--font-family-primary',
  subsets: ['latin'],
});

const fontSerif = Playfair_Display({
  variable: '--font-family-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'dev renegades - Senior Developers Without the Agency Overhead',
  description:
    'Really skilled senior devs that can help you figure out applications without the hassle of normal software agency. Work with skilled persons directly, no corporate overhead.',
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
