import { MainHeader } from '@/components/MainHeader';
import styles from './home/home.module.scss';
import React from 'react';
import '../globals.scss';
import { Metadata } from 'next';
import RootLayout from '@/app/layout';

export const metadata: Metadata = {
  title: 'Inno Music',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      <div className={styles.homePageBody}>
        <MainHeader />
        {children}
      </div>
    </RootLayout>
  );
}
