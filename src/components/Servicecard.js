import React from 'react'
import './css/Servicecard.css'
function Servicecard(props) {

  return (
    <section className='smain'>
      <div className='scard'>
        <img className='serviceimage' src={props.image} alt='service'></img>
        <h1 className='h1 '>{props.name}</h1>
        <p className='p1'>{props.desc}</p>
        <p className='h2'>{props.charge}</p>
      </div>
    </section>
  )
}

export default Servicecard