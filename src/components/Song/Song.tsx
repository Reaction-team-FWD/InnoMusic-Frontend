import React from 'react';
import styles from './Song.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import albumCover from '@/../public/img/albumCover.png';
import { SongModel } from '@/entities/song/model';

const Song = ({ song }: { song: SongModel }) => {
  const authors = song.authors.join(', ');

  return (
    <Link className={styles.songLink} href={`/home/${song.id}`}>
      <div className={styles.song}>
        <div className={styles.songDetails}>
          <Image className={styles.songCover} src={albumCover} alt={'cover'}></Image>
          <div className={styles.songTitleArtist}>
            <div className={styles.songTitle}>{song.name}</div>
            <div className={styles.songArtist}>{authors}</div>
          </div>
        </div>
        <div className={styles.songDuration}>3:00</div>
      </div>
    </Link>
  );
};

export default Song;
