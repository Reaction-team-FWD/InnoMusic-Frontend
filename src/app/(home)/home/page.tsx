import React from 'react';
import { Albums } from '@/components/Albums';

export const metadata = {
  title: 'My Music Collection',
  description:
    'Explore my extensive collection of music albums. ' +
    'Click on any track to view detailed information and listen to the song.',
  keywords: 'music, albums, tracks, collection, listen',
  openGraph: {
    title: 'My Music Collection',
    description:
      'Explore my extensive collection of music albums. ' +
      'Click on any track to view detailed information and listen to the song.',
    images: [{ url: '/img/collectionCover.png' }],
    type: 'website',
  },
  metadataBase: new URL('https://google.com'),
};

const AlbumsPage: React.FC = () => {
  return (
    <>
      <Albums />
    </>
  );
};

export default AlbumsPage;
