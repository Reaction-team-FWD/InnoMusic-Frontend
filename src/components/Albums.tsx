import React from 'react'
import Album from './Album'
import Songs from './Songs';

const albums = [
    { title: 'After Hours', artist: 'The Weeknd', year: 2020 },
  { title: 'Fine Line', artist: 'Harry Styles', year: 2019 },
  { title: 'Future Nostalgia', artist: 'Dua Lipa', year: 2020 },
  { title: 'Blame It on Baby', artist: 'DaBaby', year: 2020 },
  { title: 'Hollywood\'s Bleeding', artist: 'Post Malone', year: 2019 },
  { title: 'Savage Love', artist: 'Jawsh 685 & Jason Derulo', year: 2020 },
  { title: 'While the World Was Burning', artist: 'SAINt JHN', year: 2020 },
  { title: 'Hot Pink', artist: 'Doja Cat', year: 2019 },
  { title: 'High Off Life', artist: 'Future', year: 2020 },
  ];

const Albums = () => {
        return (
            <div id='albums'>
                <div id='cards'>
                    {albums.map((song, index) => (
                        <Album key={index} title={song.title} artist={song.artist} year={song.year}/>
                    ))}
                </div>
                <Songs />
            </div>
        ) 
}

export default Albums