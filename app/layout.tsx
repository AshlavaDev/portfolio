import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
      <body className='font-alegrya'>
        {children}
        <Analytics />
      </body>
    </html>
  )
};
