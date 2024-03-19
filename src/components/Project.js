import React from 'react'
import Projectcard from './Projectcard'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './css/Project.css'
function Project() {
  const [pdata, setPdata] = useState(null);
  useEffect(() => {
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(res => {
        setPdata(res.data.user.projects)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [])
  return (
    <section id='project'>
      <h1 className='phead'>project</h1>
      <div className='pcards'>
        {pdata && pdata.map((pdata, index) => (
          <Projectcard
            key={index}
            image={pdata.image.url} />
        ))}
      </div>
    </section>
  )
}

export default Project