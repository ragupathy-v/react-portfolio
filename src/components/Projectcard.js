import React from 'react'
import './css/Projectcard.css'
function Projectcard(props) {
  return (
    <section className='pmain'>
      <div >
       <button><img className='pimage' src={props.image} alt='service'></img></button>
      </div>
    </section>
  )
}

export default Projectcard