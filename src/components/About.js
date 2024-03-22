import React from 'react'
import Data from './Data'
import './css/About.css'
import Social from './Social media';
function About() {
    const data = Data();
    const { user: { about: { avatar: { url }, subTitle, description } } } = data || { user: { about: { avatar: {} } } }
    return (
        <section id='about' className='aboutsection'>

            <h1 className='abouthead'>About</h1>
           
            <div className='main'>
                <div className='description'>
                    <p className='text-center'>{subTitle}</p>
                    <p className=' para'>{description}</p>
                    <Social />
                </div>
                <div className='image-size'>
                    <img className='image' src={url} alt='john doe ' />
                </div>
            </div>
           

        </section>
    )
}

export default About