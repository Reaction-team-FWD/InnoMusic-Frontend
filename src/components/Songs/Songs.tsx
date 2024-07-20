import { SongsView } from '@/components/Songs/SongsView';

import React from 'react';
import songService from '@/entities/song/api';
import { SongModel } from '@/entities/song/model';

export const getServerSideProps = async () => {
  let initialSongs: SongModel[] = [];
  try {
    const response = await songService.getAll();
    initialSongs.push(...response);
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
