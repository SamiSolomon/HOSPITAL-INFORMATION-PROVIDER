import Navbar from '../Components/Navbar';
import Hero from "../Components/Hero.js"
 

function Hospital()
{
    return(
        <>
          <Navbar/>
          <Hero 
      cName = "hero"
      heroImg ="https://www.shutterstock.com/image-photo/medicine-healthcare-people-concept-female-600nw-2188588635.jpg"
      title = " List of Hospitals "
      text ="Enhancing the quality of health care in our country."
       />
       
        </>
    );

}
 export default Hospital;