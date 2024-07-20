import React from 'react';
import { Songs } from '@/components/Songs';

export const metadata = {
  title: 'Liked Songs - Your Favorite Music',
  description: 'View and manage your favorite songs. Discover and listen to all the music you love in one place.',
  keywords: 'liked songs, favorite music, music playlist, favorite tracks',
  openGraph: {
    title: 'Liked Songs - Your Favorite Music',
    description: 'View and manage your favorite songs. Discover and listen to all the music you love in one place.',
    images: [{ url: '/img/likedSongsCover.png' }],
    type: 'website',
  },
};

const SongsPage: React.FC = () => {
  return (
    <>
      <Songs />;
    </>
  );
};

export default SongsPage;
