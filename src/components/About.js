import React from 'react'
import Data from './Data'
import './css/About.css'
import Social from './Social media';
function About() {
    const data = Data();
    const { user: { about: { avatar: { url }, subTitle, description } } } = data || { user: { about: { avatar: {} } } }
    return (
        <section id='about' className='aboutsection'>
            <div className='about'>
                <h1 className='h1 '>About</h1>
                <p className='text-center'>{subTitle}</p>
                <p className='px-4 text-center'>{description}</p>
                <Social />
            </div>
            <div className='imagediv'>
                <img className='image' src={url} alt='john doe ' />

            </div>
        </section>
    )
}

export default About