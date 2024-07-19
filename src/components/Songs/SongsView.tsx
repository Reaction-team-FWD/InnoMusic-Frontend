'use client'
import {InferGetServerSidePropsType} from "next";
import React, {useState} from "react";
import styles from "@/components/Songs/Songs.module.scss";
import Song from "../Song/Song";
import {getServerSideProps} from "@/components/Songs/Songs";

interface SongData {
    id: string;
    name: string;
    artist: string;
    duration: string;
}

const StartSongs: SongData[] = [
    {
        id: '1',
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        duration: '3:20',
    },
    {
        id: '2',
        name: 'Watermelon Sugar',
        artist: 'Harry Styles',
        duration: '2:54',
    },
    {
        id: '3',
        name: 'Don’t Start Now',
        artist: 'Dua Lipa',
        duration: '3:03',
    },
    {
        id: '4',
        name: 'Rockstar',
        artist: 'DaBaby',
        duration: '3:01',
    },
    {
        id: '5',
        name: 'Circles',
        artist: 'Post Malone',
        duration: '3:35',
    },
    {
        id: '6',
        name: 'Savage Love',
        artist: 'Jawsh 685 & Jason Derulo',
        duration: '2:51',
    },
    {
        id: '7',
        name: 'Roses',
        artist: 'SAINt JHN',
        duration: '2:53',
    },
    {
        id: '8',
        name: 'Say So',
        artist: 'Doja Cat',
        duration: '3:57',
    },
    {
        id: '9',
        name: 'Adore You',
        artist: 'Harry Styles',
        duration: '3:27',
    },
    {
        id: '10',
        name: 'Life Is Good',
        artist: 'Future',
        duration: '3:57',
    },
];

export function SongsView({ initialSongs }:{ initialSongs?: SongData[] }) {
    const [songs, setSongs] = useState<SongData[]>(initialSongs || []); // Убедитесь, что начальное состояние является массивом

    const [title, setTitle] = useState<string>('');
    const [artist, setArtist] = useState<string>('');
    const [duration, setDuration] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && artist.trim() && duration.trim()) {
            const newSong: SongData = {
                id: (songs.length + 1).toString(),
                name: title,
                artist,
                duration,
            };
            const newSongs = [...songs, newSong];
            setSongs(newSongs);
            setTitle('');
            setArtist('');
            setDuration('');
            if (typeof window !== 'undefined') {
                const response = await fetch("https://b7ff-188-130-155-162.ngrok-free.app/song/create", {method: 'POST', body: JSON.stringify(newSong)});
                //localStorage.setItem('songs', JSON.stringify(newSongs));
            }
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
                {StartSongs.map((song) => (
                    <Song
                        key={song.id}
                        id={song.id}
                        title={song.name}
                        artist={song.artist}
                        duration={song.duration}
                    />
                ))}
                {songs.map((song) => (
                    <Song
                        key={song.id}
                        id={song.id}
                        title={song.name}
                        artist={song.artist}
                        duration={song.duration}
                    />
                ))}
            </div>
        </div>
    );
};