'use client';
import React, { useState } from 'react';
import styles from '@/components/Songs/SongsView.module.scss';
import Song from '../Song/Song';
import { CreateSongModel, SongModel } from '@/entities/song/model';
import songService from '@/entities/song/api';
import { getTokenOrAlert } from '@/utils/auth';
import { validateUrl } from '@/utils/validation';

const defaultCover = 'https://inno-music-frontend.vercel.app/_next/image?url=%2Fimg%2FalbumCover.png&w=750&q=75';
const defaultSong = 'https://www.ostmusic.org/sound/track/undertale/100.%20MEGALOVANIA.mp3';

const startSongs: SongModel[] = [
  {
    id: 1,
    name: 'Blinding Lights',
    authors: [{ name: 'The Weeknd', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 2,
    name: 'Watermelon Sugar',
    authors: [{ name: 'Harry Styles', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 3,
    name: 'Don’t Start Now',
    authors: [{ name: 'Dua Lipa', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 4,
    name: 'Rockstar',
    authors: [{ name: 'DaBaby', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 5,
    name: 'Circles',
    authors: [{ name: 'Post Malone', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 6,
    name: 'Savage Love',
    authors: [{ name: 'Jawsh 685 & Jason Derulo', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 7,
    name: 'Roses',
    authors: [{ name: 'SAINt JHN', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 8,
    name: 'Say So',
    authors: [{ name: 'Doja Cat', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 9,
    name: 'Adore You',
    authors: [{ name: 'Harry Styles', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: 10,
    name: 'Life Is Good',
    authors: [{ name: 'Future', id: 1, login: 'login' }],
    cover: defaultCover,
    file: defaultSong,
  },
];

export function SongsView({ initialSongs }: { initialSongs?: SongModel[] }) {
  const [songs, setSongs] = useState<SongModel[]>(initialSongs || []);
  // Убедитесь, что начальное состояние является массивом

  const [title, setTitle] = useState<string>('');
  const [cover, setCover] = useState<string>('');
  const [file, setFile] = useState<string>('');
  const [colors, setColors] = useState([false, false, false]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let trimmedTitle = title.trim();
    let newColors = [false, false, false];

    let ok = true;
    if (!trimmedTitle) {
      newColors[0] = true;
      ok = false;
    }
    if (cover && !validateUrl(cover)) {
      newColors[1] = true;
      ok = false;
    }
    if (file && !validateUrl(file)) {
      newColors[2] = true;
      ok = false;
    }
    setColors(newColors);

    if (ok) {
      const newSong: CreateSongModel = {
        name: trimmedTitle,
        extra_authors: [],
        cover: cover || defaultCover,
        file: file || defaultSong,
      };
      const song = await songService.create(newSong, getTokenOrAlert());
      const newSongs = [...songs, song];
      setSongs(newSongs);
      setTitle('');
      setCover('');
      setFile('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} className={styles.addSongForm}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onInput={() => setColors([false, false, false])}
          placeholder="Enter title"
          className={`${styles.input} ${colors[0] ? styles.bad_input : ''}`}
        />
        <input
          type="text"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          onInput={() => setColors([false, false, false])}
          placeholder="Enter cover link"
          required={false}
          className={`${styles.input} ${colors[1] ? styles.bad_input : ''}`}
        />
        <input
          type="text"
          value={file}
          onChange={(e) => setFile(e.target.value)}
          onInput={() => setColors([false, false, false])}
          placeholder="Enter file link"
          required={false}
          className={`${styles.input} ${colors[2] ? styles.bad_input : ''}`}
        />
        <button type="submit" className={styles.submitButton}>
          Add Song
        </button>
      </form>
      <div className={styles.songs}>
        {[...startSongs, ...songs].map((song) => (
          <Song key={song.id} song={{ ...song, cover: song.cover ?? defaultCover }} />
        ))}
      </div>
    </div>
  );
}
