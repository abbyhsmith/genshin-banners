import React from 'react'

const LikelyUpcomingBannersByDate = ({listItems, rarity}) => {
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
                .slice(0, 3)
                .map((character, i) => {
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
                            </div>
                        </div>
                    )})
            }
        </div>
    )
}

export default LikelyUpcomingBannersByDate
