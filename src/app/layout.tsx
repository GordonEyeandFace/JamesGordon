import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import FixedMobileCTA from '@/components/FixedMobileCTA';

const poppins = localFont({
  src: [
    { path: '../fonts/Poppins-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Poppins-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/Poppins-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/Poppins-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Dr. James R. Gordon | Oculofacial Plastic Surgeon',
  description: 'Board-Certified, Multi Award-Winning Oculofacial Plastic Surgeon & Ophthalmologist. Trusted by patients and peers alike.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased pb-12 md:pb-0`} style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)', paddingLeft: 'env(safe-area-inset-left)', paddingRight: 'env(safe-area-inset-right)' }}>
        <FixedMobileCTA />
        {children}
        <script defer src="https://connect.podium.com/widget.js#ORG_TOKEN=da6a9303-7173-4453-a07b-8c53957a51d8" id="podium-widget" data-organization-api-token="da6a9303-7173-4453-a07b-8c53957a51d8"></script>
      </body>
    </html>
  );
}
