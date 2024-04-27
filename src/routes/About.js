import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "./AboutUs.css";

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
      <img className="hospital-image" src="https://www.centralwest.health.qld.gov.au/__data/assets/image/0019/120565/Banner-6.png" alt= "" />
      </div>
      </div>
      <div>
        <div className='know'>
          <h2>Get to know Us</h2>
        <div className='ourWork'>
            <div className="vision">

            <i className="fa fa-medkit"></i>
            <a href="#">Our Vision ,Values and purpose</a>
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
</div>
<Footer/>
        </>
           
        );

}
export default About;