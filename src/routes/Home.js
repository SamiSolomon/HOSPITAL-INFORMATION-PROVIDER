import React from 'react';
import Navbar from '../Components/Navbar.js';
import Hero from "../Components/Hero.js"
import Facility from '../Components/Facility.js';
import Language from './Language.js';
 
 
// import SearchBar from '../Components/searchBar.js';
 
function Home() {
  return (
    <>
     <Language/>
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
<Facility/> 
<div className='footer'>
        <div className='top'>
           <div>
            <h1>Hospital Information</h1>
            <p>Get the information  and location of the Hospitals.</p>
           </div>
       </div> 
             <div className='bottom'>
              <div>
                <h2>Services</h2>
                <a href='/'>Conditions</a>
                <a href='/'>Listings</a>
                <a href='/'>What we offer</a>
                <a href='/'>How it Works</a>
                <a href='/'>Latest News</a>
                 </div>
                 <div>
                <h2>Useful Links</h2>
                <a href='http://localhost:3000/About'>About</a>
                <a href='http://localhost:3000/service'>Services</a>
                <a href='http://localhost:3000/Hospital'>Hospitals</a>
                <a href='http://localhost:3000/Contact'>Contact</a>
             </div>
             <div>
              <h2>Follow us</h2>
              <a href='/'>Facebook</a>
              <a href='/'>Telegram</a>
              <a href='/'>whatsapp</a>
              <a href='/'>Twitter</a>
              <a href='/'>Instagram</a>
            </div>

             <div>
              <h2>Contact Us</h2>
            <a href='/'>firii9@gmail.com</a>
            <a href='/'>+251978796545</a>
            </div>

            <hr></hr>
          <div className='sb-foorer-below'>
  
          </div>
           
         </div>
        
     </div>   
      
     
</div>
     
    {/* <SearchBar/> */}
   
   
    </>
  );
}

export default Home;