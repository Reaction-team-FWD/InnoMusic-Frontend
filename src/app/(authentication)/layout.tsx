import { AuthHeader } from '@/components/AuthHeader';
import styles from '../main.module.scss';
import React from 'react';
import '../globals.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <title>{'Inno Music'}</title>
      </head>
      <div className={styles.homePageBody}>
        <AuthHeader />
        {children}
      </div>
    </>
  );
}
