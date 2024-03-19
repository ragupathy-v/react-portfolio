import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import './css/social.css'
function Social() {
  const [smdata, setSmdata] = useState(null);
  useEffect(() => {
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(res => {
        setSmdata(res.data.user.social_handles)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [])
  return (
    <section id='social'>
      <div >
        {smdata && smdata.map((smdata, index) => (
          <a className='smlink' key={index} href={smdata.url}> <img className='smimage' src={smdata.image.url} alt='socialmedia' /></a>
        ))}

      </div>
    </section>
  )
}

export default Social 