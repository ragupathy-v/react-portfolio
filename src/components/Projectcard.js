import React from 'react'
import './css/Projectcard.css'
function Projectcard(props) {
  return (
    <section className='pmain'>
      <div >
        <img className='pimage' src={props.image} alt='service'></img>
      </div>
    </section>
  )
}

export default Projectcard