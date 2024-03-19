import React from 'react'
import './css/Skill.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Skill() {
  const [skdata, setSkdata] = useState(null);
  useEffect(() => {
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(res => {
        setSkdata(res.data.user.skills)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [])
  return (
    <section id='skill' className='skmain'>
      <h1 className='skhead h1'>Skill</h1>
      <div className='skitems h1'></div>
      {skdata && skdata.map((skdata, index) => (
        <img className='skimage' key={index} src={skdata.image.url} alt='skills'></img>
      ))}

    </section>
  )
}

export default Skill