import React from 'react'

import './styles.scss'

const EventExclusive = () => {
    return(
        <div className='eventExclusive'>
            <h2>The follow characters are unlikely to be available again:</h2>
            <div className='characterBanner'>
                <div className='characterImg'>
                    <img src={'img/aloy.jpg'} />
                </div>
                <div className='characterInfo'>
                    Aloy
                </div>
            </div>
        </div>
    )
}

export default EventExclusive
