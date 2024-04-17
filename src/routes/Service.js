import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import SearchService from './SearchService';
import "./serviceStyles.css";


import React, { useState } from 'react';

function Service(){
   return( 
  <>
   <Navbar/>
  
     
    <div className='Health'> 
       
      <h1>Health Services</h1>
      <p>The healthcare services offered in Addis Ababa</p>
      {/* <img src='https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='stethoscope' className='service-image'/> */}
      <SearchService/>

   <div className="butn"> 
     
      <h5 className="top"> Our top Services</h5>
       <button className='topService'>
        <a href='#'>Dental</a>
       </button>
       <button className='topService'>
        <a href='#'>Maternity</a>
       </button>
       <button className='topService'>
        <a href='#'>Mental Health</a>
       </button>
       <button className='topService'>
        <a href='#'>Emergency</a>
      </button>
        
    </div>
    </div>
    <Footer/>
 </>

)
}
   export default Service;