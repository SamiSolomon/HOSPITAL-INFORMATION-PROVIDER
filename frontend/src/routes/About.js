
import Navbar from '../Components/Navbar';
import "./AboutUs.css";
import Footer from '../Components/Footer';

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
      <img className="hospital-image" src="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/04/Doctor_Patient1.jpg?resize=937%2C450&ssl=1" alt= "" />
      </div>
     
      <div>
        <div className='know'>
          <h2>Get to know Us</h2>
        <div className='ourWork'>
            <div className="vision">

            <i className="fa fa-medkit"></i>
            <a href="vison.js">Our Vision ,Values and purpose</a>
            <div id="vision">
         <p>
          Our Vision ,Values and purpose  guide our work
        </p>
      </div>
          </div>
         
      <div className="links">
      <i class='fas fa-users'></i>
            <a href="#">Who we are</a>
            <div id="who-we-are">
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