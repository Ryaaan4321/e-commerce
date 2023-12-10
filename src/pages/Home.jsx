import React from 'react'
import NavBar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <div>
      <Announcement/>
       <NavBar/>
       <Slider/>
      
    </div>
  )
}

export default Home;
