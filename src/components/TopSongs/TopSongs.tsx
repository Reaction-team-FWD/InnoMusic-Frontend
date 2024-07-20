import classes from './TopSongs.module.scss';
import { Song } from '@/components/Song';
import React from 'react';
import { SearchResultBlock } from '@/components/SearchResultBlock';
import { SongModel } from '@/entities/song/model';

export default function TopSongs({ songs }: { songs: SongModel[] }) {
  let songsElements: React.ReactNode[] = [];
  for (let song of songs) {
    songsElements.push(<Song key={song.id} song={song} />);
  }

  return (
    <div className={classes.mainBlock}>
      <SearchResultBlock title="Songs">{songsElements}</SearchResultBlock>
    </div>
  );
}
