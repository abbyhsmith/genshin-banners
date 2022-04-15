import React from 'react'

import './styles.scss'

const Nav = () => {
    return(
        <div className='navigationBar'>
            <div className='navButton'><a href='#likelyBanners'>Likely Upcoming Banners</a></div>
            <div className='navButton'><a href='#bannerHistory'>Banner History</a></div>
            <div className='navButton'><a href='#standardBanner'>Standard Banner</a></div>
            <div className='navButton'><a href='#exclusiveCharacters'>Exclusive Characters</a></div>
        </div>
    )
}

export default Nav
