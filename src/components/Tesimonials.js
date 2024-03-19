import React from 'react'
import Tesimonialscard from './Tesimonialscard'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Tesimonials.css'
function Tesimonials() {
  const [tdata, setTdata] = useState([]);
  useEffect(() => {
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(res => {
        setTdata(res.data.user.testimonials)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [])

  return (
    <section id='tesimonials'>
      <h1 className='thead'>Tesimonials</h1>
      <div className='tcards'>
        {tdata && tdata.map((tdata, index) => (
          <Tesimonialscard key={index} image={tdata.image.url} review={tdata.review} name={tdata.name} />
        ))}
      </div>
    </section>
  )
}

export default Tesimonials