import React from 'react'
import Data from './Data'
import './css/Herosection.css'
import './Herosection'

function Herosection() {
    const data = Data();
    const { user: { about: { name, title } } } = data || { user: { about: {} } }
    return (
        <section id='home' className='homesection' >
            <h1 >Hello,  I'm {name}
                <p>{title}</p>
            </h1>

        </section>

    )
}

export default Herosection