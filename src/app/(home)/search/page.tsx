import { TopResult } from '@/components/TopResult';
import { TopSongs } from '@/components/TopSongs';
import { Artists } from '@/components/Artists';
import { Artist } from '@/components/Artist/';
import { AlbumsSearch } from '@/components/AlbumsSearch';
import { AlbumProps } from '@/components/Album';
import classes from './search.module.scss';
import { SongModel } from '@/entities/song/model';
import searchService from '@/entities/search/api';

const topResultImageExample =
  'https://p-u.popcdn.net/event_details/posters/' +
  '000/017/058/large/0b28f64e4745d437d6f458a7dbd311df61ec3c3b.jpg?1705064671';

const defaultCover = '/img/albumCover.png';
const defaultSong = 'https://www.ostmusic.org/sound/track/undertale/100.%20MEGALOVANIA.mp3';

const songExamples: SongModel[] = [
  {
    id: 1,
    name: 'Город под подошвой',
    authors: [{ name: 'Oxxxymiron', id: 1, login: 'oxxx' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 2,
    name: 'ОЙДА',
    authors: [{ name: 'Oxxxymiron', id: 1, login: 'oxxx' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 3,
    name: 'Я хейтер',
    authors: [{ name: 'Oxxxymiron', id: 1, login: 'oxxx' }],
    cover: defaultCover,
    file: defaultSong,
  },
];

const artistExamples: Artist[] = [
  { name: 'Oxxxymiron', imageUrl: topResultImageExample },
  {
    name: 'Markul',
    imageUrl:
      'https://yt3.googleusercontent.com/MxE3oWX7-cyBbkMhsrSQrFWNLgjZCIVCS8w5MTJ6D2vWfiBaV6xJg5m5lEnUAbMm5B8f8Nz5=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Noize MC',
    imageUrl:
      'https://yt3.googleusercontent.com/ytc/AIdro_nXOHr0UObrALBeJ5o-UoQJy14Z72QS5ZVCe1ZTbpCekQ4=s900-c-k-c0x00ffffff-no-rj',
  },
];

const albums: AlbumProps[] = [
  { id: '1', title: 'After Hours', artist: 'The Weeknd', year: 2020 },
  { id: '2', title: 'Fine Line', artist: 'Harry Styles', year: 2019 },
  { id: '3', title: 'Future Nostalgia', artist: 'Dua Lipa', year: 2020 },
  { id: '4', title: 'Blame It on Baby', artist: 'DaBaby', year: 2020 },
  { id: '5', title: "Hollywood's Bleeding", artist: 'Post Malone', year: 2019 },
  {
    id: '6',
    title: 'Savage Love',
    artist: 'Jawsh 685 & Jason Derulo',
    year: 2020,
  },
  {
    id: '7',
    title: 'While the World Was Burning',
    artist: 'SAINt JHN',
    year: 2020,
  },
  { id: '8', title: 'Hot Pink', artist: 'Doja Cat', year: 2019 },
  { id: '9', title: 'High Off Life', artist: 'Future', year: 2020 },
];

interface Props {
  searchParams: {
    q: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const result = await searchService.searchEverywhere(searchParams.q);
  const top = result.top.value;
  result.songs.forEach((s) => (s.cover = s.cover ?? songExamples[0].cover));

  return (
    <div className={classes.searchBlock}>
      <div className={classes.topBlock}>
        <div style={{ flexGrow: 2 }}>
          {result.top.type === 'user' ? (
            <TopResult imageSrc={topResultImageExample} name={top.name} type={'Artist'} />
          ) : (
            <TopResult imageSrc={(top as SongModel).cover ?? songExamples[0].cover} name={top.name} type={'Song'} />
          )}
        </div>
        <div style={{ flexGrow: 3 }}>
          <TopSongs songs={result.songs.slice(0, 3)} />
        </div>
      </div>
      <Artists artists={artistExamples} />
      <AlbumsSearch albums={albums} />
      <div style={{ height: '5em' }}></div>
    </div>
  );
}
