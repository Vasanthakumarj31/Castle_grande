import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Castle Grande — Premium Community Luxury Villas & Plots | Coimbatore',
  description:
    'Castle Grande by Castle Realty — DTCP & RERA approved premium community villas and plots at Vattamalaipalayam, MTP Road, Coimbatore. 3 & 4 BHK luxury villas with 20+ modern amenities.',
  keywords: [
    'Castle Grande', 'Castle Realty', 'premium villas Coimbatore',
    'DTCP approved plots', 'RERA approved villas', 'MTP Road Coimbatore',
    'luxury villas Coimbatore', 'Vattamalaipalayam plots',
  ],
  openGraph: {
    title: 'Castle Grande — A Perfect Home, Within Reach.',
    description: 'Premium community villas & plots at MTP Road, Coimbatore. DTCP No. 431/2025 | RERA No. 1143/2026.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#F8F5F0] text-[#2C3E50]">
        {children}
      </body>
    </html>
  );
}

