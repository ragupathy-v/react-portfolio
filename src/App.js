import './App.css';
import About from './components/About';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Services from './components/Services';
import Skill from './components/Skill';
import Tesimonials from './components/Tesimonials';
function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Services />
      <Project />
      <Skill />
      <Tesimonials />


    </>
  );
}

export default App;
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);
  const userid = '65b3a22c01d900e96c4219ae'; // wrap the value with quotes

  useEffect(() => {
    axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userid}`)
      .then(response => {
        console.log('Response data:', response.data); // Log the response data
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userid]); // Include userid in the dependency array

  // Filter user data with the specified ID
  const filteredUser = userData?.user || {};

  // Destructure the filtered user object


  return (
    <div>
      <p>Name:</p>
      <p>Title:</p>
      <p>Sub Title: </p>
      <p>Description: </p>
    </div>
  );
}

export default App;*/
