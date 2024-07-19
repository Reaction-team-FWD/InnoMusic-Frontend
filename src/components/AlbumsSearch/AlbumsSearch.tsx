import { SearchResultBlock } from '@/components/SearchResultBlock';
import { Album, AlbumProps } from '../Album';
import React from 'react';
import classes from './AlbumsSearch.module.scss';

export default function AlbumsSearch({ albums }: { albums: AlbumProps[] }) {
  let albumElements: React.ReactNode[] = [];
  for (let album of albums) {
    albumElements.push(
      <Album
        key={album.id}
        id={album.id}
        title={album.title}
        artist={album.artist}
        year={album.year}
      />
    );
  }

  return (
    <SearchResultBlock title="Albums">
      <div className={classes.albumList}>{albumElements}</div>
    </SearchResultBlock>
  );
}
