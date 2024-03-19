import React, { useEffect, useState } from 'react'
import Servicecard from './Servicecard'
import axios from 'axios';
import './css/service.css'
import './css/Servicecard.css'
function Services() {

  const [sdata, setSdata] = useState([]);
  useEffect(() => {
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(res => {
        setSdata(res.data.user.services)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [])


  return (
    <section id='services'>
      <h1 className='serviceshead'>services</h1>
      <div className='servicesdiv'>
        {sdata.map((data, index) => (
          <Servicecard key={index}
            name={data.name}
            desc={data.desc}
            charge={data.charge}
            image={data.image.url} />
        ))}
      </div>
    </section>
  )
}

export default Services