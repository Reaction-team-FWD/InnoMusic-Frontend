// src/pages/songs.tsx
import { SongsView } from '@/components/Songs/SongsView';

import React from 'react';

interface SongData {
  id: string;
  name: string;
  artist: string;
  duration: string;
}

export const getServerSideProps = async () => {
  let initialSongs: SongData[] = [];
  try {
    const response = await fetch('https://b7ff-188-130-155-162.ngrok-free.app/song/all');
    initialSongs = await response.json();
  } catch (error) {
    console.error('Failed to fetch songs:', error);
  }

  return initialSongs;
};

export async function Songs() {
  const initialSongs = await getServerSideProps();
  return (
    <>
      <SongsView initialSongs={initialSongs} />
    </>
  );
}
export default Songs;
