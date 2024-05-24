import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import Navbar from '../Components/Navbar';
import "./Vision.css"
function Vision() {
  return (
    <div>
        <Navbar/>
       
      <div className='purpose'>
        <div className='value'>
      <h1>Our Vision, Values, and Purpose</h1>
      <p>
        Our vision, values, and purpose guide our work in the healthcare industry.
        We are committed to improving the lives of patients through innovative
        technology.

      </p>
      </div>
      <h2>Vision</h2>
      <p>To be leaders in providing far-reaching and accessible healthcare services across our vast geographical region. Our vision is to innovate, demonstrate dedication, and utilize the resourcefulness of our team to deliver safe and quality healthcare to communities, even in the most sparsely populated areas. </p>
      <h2>Purpose</h2>
      <p>
Leveraging the resilience and resourcefulness of our experienced and committed team, we work together to overcome the challenges of distance and geography. By collaborating with partners within and outside the healthcare system, we combine our knowledge and experience with an entrepreneurial spirit to make a meaningful difference in the lives of the people in our care. Whether championing proactive health programs or enhancing emergency responsiveness, we are dedicated to delivering the best possible results.</p>
<h2>Values</h2>
<p>
People-Centered Care: We support people through their care journey, involve them in decisions about their care, and learn from their experiences.

Quality and Safety: We put safety first and build quality into everything we do.

Integrity and Accountability: We have a culture of mutual respect, fair dealing, ethical behavior, and transparency. We are accountable for our performance.</p>
      <Link to="/about">  About </Link>
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

            
  
           
         </div>
        
     </div>
    </div>

  );
}

export default Vision;
