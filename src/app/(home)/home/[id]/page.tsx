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

  const song = await songService.get(id);
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
  const parsedId = parseInt(params.id);
  if (isNaN(parsedId)) return notFound();

  const song = await songService.get(parsedId);

  return (
    <>
      <Content song={song} />
      <MusicPlayer song={song} />
    </>
  );
};

export default SongPage;
