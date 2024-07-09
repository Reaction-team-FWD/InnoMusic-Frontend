import React from 'react'

interface AlbumProps {
    title: string;
    artist: string;
    year: number;
  }

  const Album: React.FC<AlbumProps> = ({ title, artist, year }) => {
    return (
        <div id='album'>
            <img id='albumCover' src='/img/albumCover.png' alt='Album cover'></img>
            <div id='cardInfo'>
                <div id='albumTitle'>{title}</div>
                <div id='artist'>{artist} <span id='albumYear'>{year}</span></div>
            </div>
        </div>
    )
}

export default Album