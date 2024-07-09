import React from 'react';
import Song from '../Song/Song.tsx';
import './Songs.css'

const songs = [
    { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20' },
    { title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54' },
    { title: 'Don’t Start Now', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:03' },
    { title: 'Rockstar', artist: 'DaBaby', album: 'Blame It on Baby', duration: '3:01' },
    { title: 'Circles', artist: 'Post Malone', album: 'Hollywood\'s Bleeding', duration: '3:35' },
    { title: 'Savage Love', artist: 'Jawsh 685 & Jason Derulo', album: 'Savage Love', duration: '2:51' },
    { title: 'Roses', artist: 'SAINt JHN', album: 'While the World Was Burning', duration: '2:53' },
    { title: 'Say So', artist: 'Doja Cat', album: 'Hot Pink', duration: '3:57' },
    { title: 'Adore You', artist: 'Harry Styles', album: 'Fine Line', duration: '3:27' },
    { title: 'Life Is Good', artist: 'Future', album: 'High Off Life', duration: '3:57' },
];
const Songs: React.FC = () => {
  return (
    <div id='songs'>
      {songs.map((song, index) => (
        <Song
          key={index}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
      {songs.map((song, index) => (
        <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
        />
      ))}   
    </div>
  );
};

export default Songs;
