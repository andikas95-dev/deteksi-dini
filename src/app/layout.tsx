import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'deteksi dini',
  description: 'Aplikasi untuk mendeteksi gejala stunting pada anak',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans antialiased bg-gray-100',
          roboto.variable
        )}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
