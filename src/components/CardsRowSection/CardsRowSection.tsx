import React from 'react'
import './CardsRowSection.css'
import Album from '../Album/Album'
import arrowsIcon from '../../img/iconArrows.png'

class CardsRowSection extends React.Component {
    render() {
        return (
            <div id='cardsRowSection'>
                <div className='topicCardsInRow'>
                    <div id='seeAllIcon'>
                        <p id='seeAll'>Смотреть все</p>
                        <img src={arrowsIcon} width={"19px"} alt=''/>
                    </div>
                </div>

                <div id='cards4'>
                    <Album />
                    <Album />
                    <Album />
                    <Album />
                </div>
                <div id='cards3'>
                    <Album />
                    <Album />
                    <Album />
                </div>
            </div>
        ) 
    }
}

export default CardsRowSection