import React from 'react'
import './Album.css'
import albumCover from '../../img/albumCover.jpg'

const Album = (props) => {
    return (
        <div id='album'>
            <img id='albumCover' src={albumCover} alt='Album cover'></img>
            <div id='cardInfo'>
                <div id='albumTitle'>{props.title}</div>
                <div id='artist'>{props.artist} <span id='albumYear'>{props.year}</span></div>
            </div>
        </div>
    )
}

export default Album