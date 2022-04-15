import React from 'react'

const StandardFourStars = () => {
    return(
        <div className='standardBanner'>
            <h2>The follow characters are exclusively available on the standard banner:</h2>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/amber.png'} />
                </div>
                <div className='characterInfo'>
                    Amber
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/kaeya.png'} />
                </div>
                <div className='characterInfo'>
                    Kaeya
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/lisa.png'} />
                </div>
                <div className='characterInfo'>
                    Lisa
                </div>
            </div>
        </div>
    )
}

export default StandardFourStars
