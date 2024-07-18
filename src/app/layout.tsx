import type { Metadata } from 'next';
import styles from './main.module.scss';
import './globals.scss';

export const metadata: Metadata = {
  title: 'InnoMusic',
  description: 'The best app to listen to a music!',
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
