import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from '../../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Ahmed </span>👋<br />
            A Front-End Developer From Egypt
        </h1>
    ),
    2: (
        <InfoBox
            text={'I am a passionate developer and I am looking for an Internship'}
            link='/about'
            btnText={'Learn more'}
        />
    ),
    3: (
        <InfoBox
            text={'I like to do projects in my freetime and throughout my courses'}
            link='/projects'
            btnText='Visit my portofolio'
        />
    ),
    4: (
        <InfoBox
            text={'Need a project done or looking for a Dev? I am just a keystrokes away'}
            link='/contact'
            btnText="Let's talk"
        />
    )
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo
