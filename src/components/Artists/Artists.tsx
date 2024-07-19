import classes from './Artists.module.scss';
import React from 'react';
import { Artist as ArtistType } from '@/components/Artist';
import { SearchResultBlock } from '@/components/SearchResultBlock';

export interface Artist {
  name: string;
  imageUrl: string;
}

export default function Artists({ artists }: { artists: Artist[] }) {
  let artistElements: React.ReactNode[] = [];
  for (let artist of artists) {
    artistElements.push(<ArtistType key={artist.name} imageSrc={artist.imageUrl} name={artist.name} />);
  }

  return (
    <SearchResultBlock title="Artists">
      <div className={classes.artists}>{artistElements}</div>
    </SearchResultBlock>
  );
}
