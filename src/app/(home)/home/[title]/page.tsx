'use client';
import { useSearchParams } from 'next/navigation';
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';
import Content from '@/components/Content/Content';
import Head from 'next/head';

const SongPage: React.FC = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get('title') || 'Her Eyes';
  const artist = searchParams.get('artist') || 'Narvent';
  const year = searchParams.get('year') || '2024';

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
      <Content searchParams={searchParams} />
      <MusicPlayer searchParams={searchParams} />
    </>
  );
};

export default SongPage;
