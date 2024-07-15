import Header from '@/components/Header/Header';
import styles from './home.module.scss';
import React from 'react';
import '../globals.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <title>{'Inno Music'}</title>
      </head>
      <div className={styles.homePageBody}>
        <Header />
        {children}
      </div>
    </>
  );
}