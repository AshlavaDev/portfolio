import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Ashley Morgan',
  description: 'Portfolio for Ashley Morgan',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-alegreya  bg-cream'>
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
};
