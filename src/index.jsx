import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import classNames  from 'classnames'
import Nav from './components/Nav/Nav.jsx'
import NewBannerInput from './components/NewBannerInput/NewBannerInput.jsx'
import BannersList from './components/BannersList/BannersList.jsx'
import LikelyUpcomingBannersByDate from './components/LikelyUpcomingBannersByDate/LikelyUpcomingBannersByDate.jsx'
import LikelyUpcomingBannersByNumberRuns from './components/LikelyUpcomingBannersByNumberRuns/LikelyUpcomingBannersByNumberRuns.jsx'
import StandardFiveStars from './components/StandardFiveStars/StandardFiveStars.jsx'
import StandardFourStars from './components/StandardFourStars/StandardFourStars.jsx'
import EventExclusive from './components/EventExclusive/EventExclusive.jsx'

import './index.scss'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const App = () => {
	const [listItems, setListItems] = useState([])
	// const [character, setCharacter] = useState('')
	// const [characterStars, setCharacterStars] = useState('4')
	// const [mostRecentBanner, setMostRecentBanner] = useState('')
	// const [numberRuns, setNumberRuns] = useState(1)
	const [showReturnButton, setShowReturnButton] = useState(false)

	const fetchBannerData = () => {
		fetch('/api/get-banners', {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((data) => {
				setListItems(data)
			})
	}

	const handleScroll = () => {
		const offset = window.scrollY
		if (offset > 175) {
			setShowReturnButton(true)
		} else {
			setShowReturnButton(false)
		}
	}

	const returnToTop = () => {
		window.scrollTo(0,0)
	}

	useEffect(() => {
		fetchBannerData()
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return() => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	let fourStarCharacters = listItems.filter((rarity) => {
			return rarity.characterStars === '4'
		})
	
	let fourStarCharactersByDate = [...fourStarCharacters]
	
	fourStarCharactersByDate.sort((a, b) => {
		let returnValue
		if (new Date(a.mostRecentBanner) > new Date(b.mostRecentBanner)) {
			returnValue= -1
		} else if (new Date(a.mostRecentBanner) < new Date(b.mostRecentBanner)) {
			returnValue = 1
		} else {
			returnValue = 0
		}
		if (returnValue === 0) {
			returnValue = a.character.localeCompare(b.character)
		}
		return returnValue
	})

	let fourStarCharactersByNumberRuns = [...fourStarCharacters]
	
	fourStarCharactersByNumberRuns.sort((a, b) => {
		let returnValue
		if (a.numberRuns > b.numberRuns) {
			returnValue = -1
		} else if (a.numberRuns < b.numberRuns) {
			returnValue = 1
		} else {
			returnValue = 0
		}
		if (returnValue === 0) {
			returnValue = a.character.localeCompare(b.character)
		}
		return returnValue
	})

	let fiveStarCharacters = listItems.filter((rarity) => {
			return rarity.characterStars === '5'
		})

	let fiveStarCharactersByDate = [...fiveStarCharacters]
	
	fiveStarCharactersByDate.sort((a, b) => {
		let returnValue
		if (new Date(a.mostRecentBanner) > new Date(b.mostRecentBanner)) {
			returnValue= -1
		} else if (new Date(a.mostRecentBanner) < new Date(b.mostRecentBanner)) {
			returnValue = 1
		} else {
			returnValue = 0
		}
		if (returnValue === 0) {
			returnValue = a.character.localeCompare(b.character)
		}
		return returnValue
	})

	let fiveStarCharactersByNumberRuns = [...fiveStarCharacters]
	
	fiveStarCharactersByNumberRuns.sort((a, b) => {
		let returnValue
		if (a.numberRuns > b.numberRuns) {
			returnValue = -1
		} else if (a.numberRuns < b.numberRuns) {
			returnValue = 1
		} else {
			returnValue = 0
		}
		if (returnValue === 0) {
			returnValue = a.character.localeCompare(b.character)
		}
		return returnValue
	})

	const buttonClass = classNames(
		{'buttonScrolled': showReturnButton},
		{'hideButton': !showReturnButton}
	)

	return (
		<div className='App'>
			<h1>Genshin Impact:</h1>
			<h1>Likely Upcoming Banners</h1>
			<Nav />
			{/* <NewBannerInput character={character} setCharacter={setCharacter} characterStars={characterStars} setCharacterStars={setCharacterStars} mostRecentBanner={mostRecentBanner} setMostRecentBanner={setMostRecentBanner} numberRuns={numberRuns} setNumberRuns={setNumberRuns} fetchBannerData={fetchBannerData} /> */}
			<div className='bannerDivs' id='likelyBanners'>
				<LikelyUpcomingBannersByDate listItems={fiveStarCharactersByDate} rarity='5' />
				<LikelyUpcomingBannersByDate listItems={fourStarCharactersByDate} rarity='4' />
			</div>
			<div className='bannerDivs'>
				<LikelyUpcomingBannersByNumberRuns listItems={fiveStarCharactersByNumberRuns} rarity='5' />
				<LikelyUpcomingBannersByNumberRuns listItems={fourStarCharactersByNumberRuns} rarity='4' />
			</div>
			<div className='bannerDivs' id='bannerHistory'>
				<BannersList listItems={fiveStarCharactersByDate} rarity='5' />
				<BannersList listItems={fourStarCharactersByDate} rarity='4' />
			</div>
			<div className='bannerDivs' id='standardBanner'>
				<StandardFiveStars />
				<StandardFourStars />
			</div>
			<div className='bannerDivs' id='exclusiveChar4acters'>
				<EventExclusive />
			</div>
			<button type='button' className={buttonClass} onClick={returnToTop}>return to top</button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
