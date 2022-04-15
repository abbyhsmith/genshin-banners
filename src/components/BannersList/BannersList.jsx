import React from 'react'

import './styles.scss'

const BannersList = ({listItems, rarity}) => {
    return(
        <div className='bannersList'>
            {rarity === '5' && <h2>Five-Star Characters:</h2>}
            {rarity === '4' && <h2>Four-Star Characters:</h2>}
            {listItems.map((character, i) => {
                let date = new Date(character.mostRecentBanner)
                return(
                    <div className='characterBanner' key={`character-${i}`}>
                        <div className='characterImg'>
                            <img src={`../../img/${character.character.toLowerCase()}.png`} />
                        </div>
                        <div className='characterInfo'>
                            <div className='characterName'>
                                {character.character}
                            </div>
                            <div className='mostRecentBannerDate'>
                                {date.toLocaleDateString('en-US')}
                            </div>
                            <div className='numberOfBanners'>
                                {character.characterStars === '4' &&
                                    "Number of rate-ups:"
                                }
                                {character.characterStars === '5' &&
                                    "Number of banners:"
                                }
                                {character.numberRuns}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BannersList