import React from 'react'
import Data from './Data';
import './css/navbar.css'
function Navbar() {
    const data = Data()
    const { user: { about: { name } } } = data || { user: { about: {} } }
    return (

        <nav className='navbars fixed-top'>
            <p className=' name h1'> {name}</p>
            <ul className='list '>
                <li ><a className='link ' href='#home'>Home</a></li>
                <li ><a className='link ' href='#about'>About</a></li>
                <li ><a className='link ' href='#services'>Services</a></li>
                <li ><a className='link ' href='#project'>Project</a></li>
                <li><a className='link ' href='#skill'>Skill</a></li>
                <li ><a className='link ' href='#tesimonials'>Tesimonials</a></li>
                <li ><a className='link ' href='#social'>Social</a></li>
            </ul>
        </nav>

    )
}
export default Navbar;