'use client';

import React, { useEffect, useState } from 'react';
import styles from './Content.module.css';
import Image from 'next/image';
import { SongModel } from '@/entities/song/model';
import { getTokenOrAlert, isLoggedIn } from '@/utils/auth';
import { getCurrentUser } from '@/utils/user';
import songService from '@/entities/song/api';
import { useRouter } from 'next/navigation';

const albums = [
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

const Content = ({ song }: { song: SongModel }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  useEffect(() => setIsAuthor(isLoggedIn() && song.authors.map((a) => a.id).includes(getCurrentUser().id)));
  const router = useRouter();

  const title = song.name;
  const artist = song.authors.map((a) => a.name).join(', ');
  const year = '2024';

  async function deleteSong() {
    await songService.delete(song.id, getTokenOrAlert());
    router.push('/home');
  }

  return (
    <div className={styles.songPage}>
      <div className={styles.leftPart}>
        <div className={styles.container}>
          <div className={styles.albumCover}>
            <Image
              className={styles.image}
              src={song.cover}
              alt="Album cover"
              width={'100'}
              height={'100'}
              objectFit="cover"
            />
          </div>
          <div className={styles.albumInfo}>
            <div className={styles.albumLabel}>Album</div>
            <h1 className={styles.albumTitle}>{title}</h1>
            <div className={styles.albumDetails}>
              <span className={styles.artist}>{artist}</span>
              <span className={styles.year}>{year}</span>
              <span className={styles.single}>single</span>
            </div>
            <div className={styles.buttons}>
              <button className={styles.listenButton}>Listen</button>
              <button className={styles.likeButton}>Like</button>
              <button className={styles.downloadButton}>Download</button>
              {isAuthor && (
                <button className={styles.moreButton} onClick={deleteSong}>
                  Delete song
                </button>
              )}
              <button className={styles.moreButton}>...</button>
            </div>
          </div>
        </div>
        <div className={styles.comments}>
          <h2 className={styles.commentsTitle}>Comments</h2>
          <ul className={styles.commentsList}>
            <li className={styles.commentItem}>
              <p className={styles.commentText}>Lorem ipsum dolor sit amet.</p>
              <span className={styles.commentAuthor}>— User 1</span>
            </li>
            <li className={styles.commentItem}>
              <p className={styles.commentText}>Lorem, ipsum dolor.</p>
              <span className={styles.commentAuthor}>— User 2</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.related}>
        <h2 className={styles.relatedTitle}>Related</h2>
        <ul className={styles.relatedList}>
          {albums.map((album) => (
            <li key={album.id} className={styles.relatedItem}>
              <a href="#" className={styles.relatedLink}>
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.203125" width="32" height="32" rx="16" fill="white" />
                  <g clip-path="url(#clip0_0_1274)">
                    <path
                      d="M11 9.91611C10.9999 9.79317 11.0321 9.67236 11.0935 9.56584C11.1549 9.45932 11.2432 9.37084 11.3497 9.30931C11.4561 9.24778 11.5769 9.21537 11.6998 9.21533C11.8227 9.2153 11.9435 9.24764 12.05 9.30911L22.94 15.5971C23.0463 15.6586 23.1346 15.7469 23.1959 15.8533C23.2573 15.9597 23.2896 16.0803 23.2896 16.2031C23.2896 16.3259 23.2573 16.4466 23.1959 16.5529C23.1346 16.6593 23.0463 16.7476 22.94 16.8091L12.05 23.0971C11.9436 23.1585 11.8229 23.1909 11.7001 23.1909C11.5772 23.1909 11.4565 23.1586 11.3501 23.0972C11.2437 23.0358 11.1553 22.9474 11.0939 22.841C11.0324 22.7347 11 22.614 11 22.4911V9.91611Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1274">
                      <rect width="16" height="16" fill="white" transform="translate(8 8.20312)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className={styles.relatedItemTitle}>{album.title}</span> -{' '}
                <span className={styles.relatedItemArtist}>{album.artist}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
