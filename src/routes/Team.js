import React from 'react';
import  "./team.css";
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
const Team = () => {
  return (
    <>
    <Navbar/>
    <div className='team'>
      <div className='our'>
      <Link to="/about">  About </Link>
        <h1>Who we are</h1>
      <p>
      Our team is made up of passionate healthcare professionals and
      innovative technologists who are dedicated to improving patient
      outcomes and streamlining medical device management. We come from
      diverse backgrounds, but we are united by our shared mission to
      revolutionize the healthcare industry.
    </p>
    </div>
    <div className="team-highlights">
      <div className="highlight">
        <i className="fas fa-heartbeat"></i>
        <h4>Clinical Expertise</h4>
        <p>
          Our team includes experienced clinicians and medical device
          specialists who understand the unique challenges and needs of
          healthcare providers.
        </p>
      </div>
      <div className="highlight">
        <i className="fas fa-code"></i>
        <h4>Technical Prowess</h4>
        <p>
          Our developers and engineers are at the forefront of
          cutting-edge technologies, ensuring our solutions are
          state-of-the-art and user-friendly.
        </p>
      </div>
      <div className="highlight">
        <i className="fas fa-hands-helping"></i>
        <h4>Collaborative Spirit</h4>
        <p>
          We believe in the power of teamwork and collaboration,
          working closely with our clients to understand their needs
          and deliver tailored solutions.
        </p>
       
      </div>
     
    </div>
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
  </>
     
  )
}

export default Team
