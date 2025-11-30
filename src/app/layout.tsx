import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Catalyst RD1 | Offline AI Ecosystem',
  description: 'A high-impact, privacy-focused offline AI ecosystem.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
