import Navbar from '../Components/Navbar';
import Hero from "../Components/Hero.js"

function About()
{
    return(
        <>
         <Navbar/>
         <Hero 
      cName = "hero-mid"
      
      title = "All about us"
      text ="we provide services and location of the hospital"
      buttonText ="Learn more" 
      url="/"
      btnClass="show"
      
       />
        </>
           
        );

}
export default About;