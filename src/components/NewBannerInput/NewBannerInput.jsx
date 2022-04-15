import React from 'react'

const NewBannerInput = ({character, setCharacter, characterStars, setCharacterStars, mostRecentBanner, setMostRecentBanner, numberRuns, setNumberRuns, fetchBannerData}) => {
    const addNewBanner = (e) => {
        e.preventDefault()
        if(characterName && mostRecentBanner) {
            fetch('/api/add-banner', {
                method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({character: character, mostRecentBanner: mostRecentBanner, characterStars: characterStars, numberRuns: numberRuns})
            })
            .then(() => {
                setCharacter('')
                setCharacterStars('4')
                setMostRecentBanner('')
                setNumberRuns(1)
                fetchBannerData()
            })
        }
    }

    return(
        <div className='newBannerInput'>
            <form className='bannerInputForm' onSubmit={(e) => addNewBanner(e)}>
                <div className='inputFormLabels'>
                    <label className='characterNameTitle' htmlFor='characterName'>Character:</label>
                    <label className='characterStarsTitle' htmlFor='characterStars'>Rarity:</label>
                    <label className='mostRecentBannerTitle' htmlFor='mostRecentBanner'>Most recent banner:</label>
                    <label className='numberRunsTitle' htmlFor='numberRuns'>Number of runs:</label>
                </div>
                <div className='bannerInputBoxes'>
                    <input type='text' className='characterName' id='characterName' name='characterName' placeholder='Character name' value={character} onChange={(e) => setCharacter(e.target.value)} required></input>
                    <select value={characterStars} name='characterStars' id='characterStars' className='characterStars' onChange={(e) => setCharacterStars(e.target.value)}>
                        <option value='4'>4 Star</option>
                        <option value='5'>5 Star</option>
                    </select>
                    <input type='date' className='mostRecentBanner' id='mostRecentBanner' name='mostRecentBanner' value={mostRecentBanner} onChange={(e) => setMostRecentBanner(e.target.value)} required></input>
                    <input type='number' className='numberRuns' id='numberRuns' name='numberRuns' value={numberRuns} onChange={(e) => setNumberRuns(e.target.value)}></input>
                    <button type='submit' className='submitNewCharacter'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewBannerInput
