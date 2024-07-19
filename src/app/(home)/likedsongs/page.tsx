import React from 'react';
import { Songs } from '@/components/Songs';
import Head from 'next/head';

const SongsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Liked Songs</title>
        <meta name="description" content="" />
      </Head>
      <Songs />;
    </>
  );
};

export default SongsPage;
