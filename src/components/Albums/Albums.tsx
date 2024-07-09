import React from 'react'
import Album from '../Album/Album.tsx'
import Songs from '../Songs/Songs.tsx';
import './Albums.css'

const albums = [
    { title: 'After Hours', artist: 'The Weeknd' },
    { title: 'Fine Line', artist: 'Harry Styles' },
    { title: 'Future Nostalgia', artist: 'Dua Lipa' },
    { title: 'Blame It on Baby', artist: 'DaBaby' },
    { title: 'Hollywood\'s Bleeding', artist: 'Post Malone' },
    { title: 'Savage Love', artist: 'Jawsh 685 & Jason Derulo' },
    { title: 'While the World Was Burning', artist: 'SAINt JHN' },
    { title: 'Hot Pink', artist: 'Doja Cat' },
    { title: 'High Off Life', artist: 'Future' },
  ];

const Albums = () => {
        return (
            <div id='albums'>
                <div id='cards'>
                    {albums.map((song, index) => (
                        <Album id='cards'
                        key={index}
                        title={song.title}
                        artist={song.artist}
                        />
                    ))}
                </div>
                <Songs />
            </div>
        ) 
}

export default Albums