 
import Navbar from '../Components/Navbar';
import SearchService from './SearchService';
import "./serviceStyles.css";
import photo22 from "../Assets/photo22.jpg"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
 

function Service(){
   return( 
  <>
   <Navbar/>
  <div className='Health'> 
    <div className='HealthService' >
      <p>
      <h1>Health Services</h1>
        Welcome to our medical devices identifier and location provider! We are a team of dedicated professionals
        committed to improving the healthcare industry through innovative technology.
      </p>
      <img className="hospitalImage" src= {photo22} alt= "" />
      </div>
      </div>
      <p>The healthcare services offered in Addis Ababa</p>
      {/* <img src='https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='stethoscope' className='service-image'/> */}
  
      <SearchService/>
   <div className="butn"> 
     
      <h5 className="top"> Our top Services</h5>
       <button className='topService'>
       <Link to="/dental">Dental</Link>
       </button>
       <button className='topService'>
       <Link to="/maternity">Marernity</Link>
       </button>
       <button className='topService'>
       <Link to="/mentalhealth">Mental Health</Link>
       </button>
       <button className='topService'>
       <Link to="/emergency">Emergency</Link>
      </button>
        
    </div>
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
                <Link to="/About">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/Hospital">Hospitals</Link>
                <Link to="/Contact"></Link>Contact
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
   
 </>

)
}
   export default Service;