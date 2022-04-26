import React from 'react'

import './styles.scss'

const StandardFiveStars = () => {
    return(
        <div className='standardBanner'>
            <h2>Five-Star Characters available on standard and all event banners:</h2>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/diluc.jpg'} />
                </div>
                <div className='characterInfo'>
                    Diluc
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/jean.jpg'} />
                </div>
                <div className='characterInfo'>
                    Jean
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/keqing.jpg'} />
                </div>
                <div className='characterInfo'>
                    Keqing
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/mona.jpg'} />
                </div>
                <div className='characterInfo'>
                    Mona
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/qiqi.jpg'} />
                </div>
                <div className='characterInfo'>
                    Qiqi
                </div>
            </div>
        </div>
    )
}

export default StandardFiveStars
