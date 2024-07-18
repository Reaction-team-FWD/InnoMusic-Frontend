import { TopResult } from '@/components/TopResult';
import { TopSongs } from '@/components/TopSongs';
import { SongCardProps } from '@/components/Song/Song';
import { Artists } from '@/components/Artists';
import Artist from '@/components/Artist/Artist';
import { AlbumsSearch } from '@/components/AlbumsSearch';
import { AlbumProps } from '@/components/Album/Album';
import classes from './search.module.scss';

const topResultImageExample =
  'https://p-u.popcdn.net/event_details/posters/' +
  '000/017/058/large/0b28f64e4745d437d6f458a7dbd311df61ec3c3b.jpg?1705064671';
const songExamples: SongCardProps[] = [
  { title: 'Город под подошвой', artist: 'Oxxxymiron', duration: '3:00' },
  { title: 'ОЙДА', artist: 'Oxxxymiron', duration: '3:10' },
  { title: 'Я хейтер', artist: 'Oxxxymiron', duration: '2:59' },
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
  { title: 'After Hours', artist: 'The Weeknd', year: 2020 },
  { title: 'Fine Line', artist: 'Harry Styles', year: 2019 },
  { title: 'Future Nostalgia', artist: 'Dua Lipa', year: 2020 },
  { title: 'Blame It on Baby', artist: 'DaBaby', year: 2020 },
  { title: "Hollywood's Bleeding", artist: 'Post Malone', year: 2019 },
  { title: 'Savage Love', artist: 'Jawsh 685 & Jason Derulo', year: 2020 },
  { title: 'While the World Was Burning', artist: 'SAINt JHN', year: 2020 },
  { title: 'Hot Pink', artist: 'Doja Cat', year: 2019 },
  { title: 'High Off Life', artist: 'Future', year: 2020 },
];

export default function SearchPage() {
  return (
    <div className={classes.searchBlock}>
      <div className={classes.topBlock}>
        <div style={{ flexGrow: 2 }}>
          <TopResult
            imageSrc={topResultImageExample}
            name={'Oxxxymiron'}
            type={'Artist'}
          />
        </div>
        <div style={{ flexGrow: 3 }}>
          <TopSongs songs={songExamples} />
        </div>
      </div>
      <Artists artists={artistExamples} />
      <AlbumsSearch albums={albums} />
      <div style={{ height: '5em' }}></div>
    </div>
  );
}
