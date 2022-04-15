import React from 'react'

import './styles.scss'

const StandardFiveStars = () => {
    return(
        <div className='standardBanner'>
            <h2>The follow characters are available on the standard banner and all event banners:</h2>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/diluc.png'} />
                </div>
                <div className='characterInfo'>
                    Diluc
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/jean.png'} />
                </div>
                <div className='characterInfo'>
                    Jean
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/keqing.png'} />
                </div>
                <div className='characterInfo'>
                    Keqing
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/mona.png'} />
                </div>
                <div className='characterInfo'>
                    Mona
                </div>
            </div>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'../../img/qiqi.png'} />
                </div>
                <div className='characterInfo'>
                    Qiqi
                </div>
            </div>
        </div>
    )
}

export default StandardFiveStars
