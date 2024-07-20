'use client';
import React, { useState } from 'react';
import styles from '@/components/Songs/SongsView.module.scss';
import Song from '../Song/Song';
import { CreateSongModel, SongModel } from '@/entities/song/model';
import songService from '@/entities/song/api';
import { getTokenOrAlert } from '@/utils/auth';

const defaultCover = 'https://inno-music-frontend.vercel.app/_next/image?url=%2Fimg%2FalbumCover.png&w=750&q=75';
const defaultSong = 'https://www.ostmusic.org/sound/track/undertale/100.%20MEGALOVANIA.mp3';

const startSongs: SongModel[] = [
  {
    id: '1',
    name: 'Blinding Lights',
    authors: ['The Weeknd'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '2',
    name: 'Watermelon Sugar',
    authors: ['Harry Styles'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '3',
    name: 'Don’t Start Now',
    authors: ['Dua Lipa'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '4',
    name: 'Rockstar',
    authors: ['DaBaby'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '5',
    name: 'Circles',
    authors: ['Post Malone'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '6',
    name: 'Savage Love',
    authors: ['Jawsh 685 & Jason Derulo'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '7',
    name: 'Roses',
    authors: ['SAINt JHN'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '8',
    name: 'Say So',
    authors: ['Doja Cat'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '9',
    name: 'Adore You',
    authors: ['Harry Styles'],
    cover: defaultCover,
    file: defaultSong,
  },
  {
    id: '10',
    name: 'Life Is Good',
    authors: ['Future'],
    cover: defaultCover,
    file: defaultSong,
  },
];

export function SongsView({ initialSongs }: { initialSongs?: SongModel[] }) {
  const [songs, setSongs] = useState<SongModel[]>(initialSongs || []);
  // Убедитесь, что начальное состояние является массивом

  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && artist.trim() && duration.trim()) {
      const newSong: CreateSongModel = {
        name: title,
        extra_authors: [],
        cover: defaultCover,
        file: defaultSong,
      };
      const song = await songService.create(newSong, getTokenOrAlert());
      const newSongs = [...songs, song];
      setSongs(newSongs);
      setTitle('');
      setArtist('');
      setDuration('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} className={styles.addSongForm}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className={styles.input}
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Enter artist"
          className={styles.input}
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration"
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Add Song
        </button>
      </form>
      <div className={styles.songs}>
        {[...startSongs, ...songs].map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}
