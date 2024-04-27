import React from 'react';
import Navbar from '../Components/Navbar.js';
import Hero from "../Components/Hero.js"
import Facility from '../Components/Facility.js';
import Footer from '../Components/Footer.js';
// import SearchBar from '../Components/searchBar.js';
 
function Home() {
  return (
    <>
     
      <Navbar/>
      <div className='welcome'>
      <div className='Home' >
      
      <p>
      <h1>Hospital Information: Medical Services  and Hospital Location</h1>
        Welcome to our medical devices identifier and location provider!  
        <button className='List'>
      <a href='http://localhost:3000/Hospital'>List of Hospitals</a>
      <i className="fas fa-chevron-right"></i>
     </button>
    <br/>
    <button className=' List'>
    <a href='http://localhost:3000/service'>Find Your nearest service</a>
    <i className="fas fa-chevron-right"></i>
     </button>
      </p>
      
      <img className="home-image" src="https://www.shutterstock.com/image-photo/medicine-healthcare-people-concept-female-600nw-2188588635.jpg" alt= "" />
    
</div>
 
      
     
</div>
     
    {/* <SearchBar/> */}
    <Facility/> 
    <Footer/>
    </>
  );
}

export default Home;