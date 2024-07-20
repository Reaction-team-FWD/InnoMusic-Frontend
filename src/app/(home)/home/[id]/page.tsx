import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';
import Content from '@/components/Content/Content';
import songService from '@/entities/song/api';
import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let id = parseInt(params.id);
  if (isNaN(id)) return {};

  let song;
  try {
    song = await songService.get(id);
  } catch (e) {
    return {};
  }
  const authors = song.authors.join(', ');
  const year = 2024;

  const title = `${song.name} - ${authors}`;
  const description = `Listen to ${song.name} by ${authors}, released in ${year}.`;

  return {
    title,
    description,
    keywords: `music, ${authors}, ${title}, ${year}, album`,
    openGraph: {
      title,
      description,
      images: [{ url: song.cover }],
      type: 'music.song',
    },
  };
}

const SongPage = async ({ params }: Props) => {
  const id = parseInt(params.id);
  if (isNaN(id)) return notFound();

  let song;
  try {
    song = await songService.get(id);
  } catch (e) {
    return notFound();
  }

  return (
    <>
      <Content song={song} />
      <div style={{ visibility: 'hidden', height: '90px' }}></div>
      <MusicPlayer song={song} />
    </>
  );
};

export default SongPage;
