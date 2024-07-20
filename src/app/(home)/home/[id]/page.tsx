import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';
import Content from '@/components/Content/Content';
import Head from 'next/head';
import songService from '@/entities/song/api';
import React from 'react';
import { notFound } from 'next/navigation';

const SongPage = async ({ params }: { params: { id: string } }) => {
  const parsedId = parseInt(params.id);
  if (isNaN(parsedId)) return notFound();

  const song = await songService.get(parsedId);
  const title = song.name;
  const artist = song.authors.join(', ');
  const year = 2023;

  return (
    <>
      <Head>
        <title>
          {title} - {artist}
        </title>
        <meta name="description" content={`Listen to ${title} by ${artist}, released in ${year}.`} />
        <meta name="keywords" content={`music, ${artist}, ${title}, ${year}, album`} />
        <meta property="og:title" content={`${title} - ${artist}`} />
        <meta property="og:description" content={`Listen to ${title} by ${artist}, released in ${year}.`} />
        <meta property="og:image" content="/img/albumCover.png" />
        <meta property="og:type" content="music.song" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>
      <Content song={song} />
      <MusicPlayer song={song} />
    </>
  );
};

export default SongPage;
