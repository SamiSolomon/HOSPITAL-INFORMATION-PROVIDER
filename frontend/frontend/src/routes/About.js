
import Navbar from '../Components/Navbar';
import "./AboutUs.css";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
function About()
{
    return(
        <>
         <Navbar/>
        
     <div className='About'>
     
      <div className='Healthcare' >
      
      <p>
      <h1>About Us</h1>
        Welcome to our medical devices identifier and location provider! We are a team of dedicated professionals
        committed to improving the healthcare industry through innovative technology.
      </p>
      
      </div>
     
      <div>
        <div className='know'>
          <h2>Get to know Us</h2>
        <div className='ourWork'>
            <div className="vision">
            <i className="fa fa-medkit"></i>    
      <Link to="/vision">Our Vision, Values and purpose</Link>
      <div id="vision"> 
      </div>
          </div>
          <div className='vision'>
          <i class='fas fa-users'></i>
          <Link to="/team">Who we are</Link>
      <div id="who-we-areision">
      <p>
         Learn about team. 
        </p>
      </div>
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
     
   </div>
   </div>
   
        </>
           
        );

}
export default About;