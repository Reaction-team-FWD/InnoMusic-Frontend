import React from 'react';
import { Songs } from '@/components/Songs';
import Head from 'next/head';

const SongsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Liked Songs - Your Favorite Music</title>
        <meta
          name="description"
          content="View and manage your favorite songs. Discover and listen to all the music you love in one place."
        />
        <meta name="keywords" content="liked songs, favorite music, music playlist, favorite tracks" />
        <meta property="og:title" content="Liked Songs - Your Favorite Music" />
        <meta
          property="og:description"
          content="View and manage your favorite songs. Discover and listen to all the music you love in one place."
        />
        <meta property="og:image" content="/img/likedSongsCover.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>
      <Songs />;
    </>
  );
};

export default SongsPage;
