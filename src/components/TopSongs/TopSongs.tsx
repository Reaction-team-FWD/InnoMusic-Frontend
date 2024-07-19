import classes from './TopSongs.module.scss';
import { Song, SongCardProps } from '@/components/Song';
import React from 'react';
import { SearchResultBlock } from '@/components/SearchResultBlock';

export default function TopSongs({ songs }: { songs: SongCardProps[] }) {
  let songsElements: React.ReactNode[] = [];
  for (let song of songs) {
    songsElements.push(
      <Song id="1" key={song.title} title={song.title} artist={song.artist} duration={song.duration} />
    );
  }

  return (
    <div className={classes.mainBlock}>
      <SearchResultBlock title="Songs">{songsElements}</SearchResultBlock>
    </div>
  );
}
