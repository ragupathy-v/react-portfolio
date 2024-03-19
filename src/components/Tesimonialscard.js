import React from 'react'
import './css/Tesimonialscard.css'
function Tesimonialscard(props) {
  return (
    <section className='Tesimonialscard'>
      <img className='timage' src={props.image} alt='client' />
      <p>{props.review}</p>
      <h1>{props.name}</h1>
    </section>
  )
}

export default Tesimonialscard;