import React from 'react'

import './styles.scss'

const Faq = () => {
    return (
        <div className='faq'>
            <div className='faqQuestion'>
                <h3>What is Genshin Impact?</h3>
                <p>Genshin Impact is an action RPG video game made by Chinese company MiHoYo for mobile, PC, and PlayStation 4 & 5 platforms. The game features a "gacha" system where players can gamble to receive limited availability characters.</p>
            </div>
            <div className='faqQuestion'>
                <h3>What is a "banner"?</h3>
                <p>A "banner" is where you can pull for a specific limited character. Banners typically last for 21 days and periodically cycle through older characters and newly added characters.</p>
            </div>
        </div>
    )
}

export default Faq