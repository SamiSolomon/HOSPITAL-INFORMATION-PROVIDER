import Navbar from '../Components/Navbar';
import Hero from "../Components/Hero.js"
import SearchBar from '../Components/searchBar.js';
 
function Service(){
    return(
        <>

        <Navbar/>
        <Hero 
        title = "Services"
        text ="Enhancing the quality of health care in our country."
        btnClass = "show"
        buttonText="Hospitals"
    />
     <div className='cardDiv grid'>
        <div className='searchInput'>
            <label htmlFor='hospital'>Search Your Hospitals</label>
            <div className='input flex'>
                <input type='text' placeholder='Search by location,service or Hospital'/>
                
            </div>
        </div>
     </div>
      <SearchBar/>
      
        </>

    );
 


}
   export default Service;