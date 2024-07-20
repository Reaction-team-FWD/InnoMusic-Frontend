import type { Metadata, Viewport } from 'next';
import styles from './main.module.scss';
import './globals.scss';
import React from 'react';

export const metadata: Metadata = {
  title: 'InnoMusic',
  description: 'The best app to listen to a music!',
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.homePageContainer}>{children}</body>
    </html>
  );
}
