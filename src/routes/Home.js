import React from 'react';
import Navbar from '../Components/Navbar.js';
import Hero from "../Components/Hero.js"
import Facility from '../Components/Facility.js';
import Footer from '../Components/Footer.js';
import SearchBar from '../Components/searchBar.js';
 
function Home() {
  return (
    <>
     
      <Navbar/>
      <Hero 
      cName = "hero"
      heroImg ="https://www.shutterstock.com/image-photo/medicine-healthcare-people-concept-female-600nw-2188588635.jpg"
      title = "Hospitals and Their Services"
      text ="Enhancing the quality of health care in our country."
      btnClass = "show"
      buttonText="Hospitals "
   
        />
     
    <SearchBar/>
    <Facility/> 
    <Footer/>
    </>
  );
}

export default Home;