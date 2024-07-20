import { AuthHeader } from '@/components/AuthHeader';
import styles from '../main.module.scss';
import React from 'react';
import '../globals.scss';

export const metadata = {
  title: 'Inno Music',
  description: 'Listen to your favorite music for free. Create playlists and share them with your friends.',
  keywords: 'music, free, playlists, share, friends',
  openGraph: {
    title: 'Inno Music',
    description: 'Listen to your favorite music for free. Create playlists and share them with your friends.',
    images: [{ url: '/img/logo.png' }],
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.homePageBody}>
        <AuthHeader />
        {children}
      </div>
    </>
  );
}
