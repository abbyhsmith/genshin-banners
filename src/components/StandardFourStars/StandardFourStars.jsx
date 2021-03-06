import React from 'react'

const StandardFourStars = () => {
    return(
        <div className='standardBanner'>
            <h2>Four-Star Characters exclusively available on the standard banner:</h2>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/amber.jpg'} />
                </div>
                <div className='characterInfo'>
                    Amber
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/kaeya.jpg'} />
                </div>
                <div className='characterInfo'>
                    Kaeya
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/lisa.jpg'} />
                </div>
                <div className='characterInfo'>
                    Lisa
                </div>
            </div>
        </div>
    )
}

export default StandardFourStars
