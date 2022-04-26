import React from 'react'

import './styles.scss'

const LikelyUpcomingBannersByNumberRuns = ({listItems, rarity}) => {
    let likelyBanners = [...listItems]
    return(
        <div className='likelyReruns'>
            <h2>
                {rarity === '5' && 'Five-Star Characters'}
                {rarity === '4' && 'Four-Star Characters'}
                :
            </h2>
            {likelyBanners
                .reverse()
                .map((character, i) => {
                    if (character.numberRuns === 1 && rarity === '5') {
                        return(
                            <div className='characterBanner' key={`character-${i}`}>
                                <div className='characterImg'>
                                    <img src={`img/${character.character.toLowerCase()}.jpg`} />
                                </div>
                                <div className='characterInfo'>
                                    <div className='characterName'>
                                        {character.character}
                                    </div>
                                    <div className='numberOfBanners'>
                                        Banners: {character.numberRuns}
                                    </div>
                                </div>
                            </div>
                    )}
                    if (character.numberRuns < 3 && rarity === '4') {
                        return(
                            <div className='characterBanner' key={`character-${i}`}>
                                <div className='characterImg'>
                                    <img src={`img/${character.character.toLowerCase()}.jpg`} />
                                </div>
                                <div className='characterInfo'>
                                    <div className='characterName'>
                                        {character.character}
                                    </div>
                                    <div className='numberOfBanners'>
                                        Banners: {character.numberRuns}
                                    </div>
                                </div>
                            </div>
                    )}
                })
            }
        </div>
    )
}

export default LikelyUpcomingBannersByNumberRuns
