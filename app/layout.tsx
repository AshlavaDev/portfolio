import './globals.css';

export const metadata = {
  title: 'Ashley Morgan',
  description: 'Portfolio for Ashley Morgan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-alegrya'>{children}</body>
    </html>
  )
};
