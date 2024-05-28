import "./facility.css";
// import menelik from "../Assets/menelik.jpg";
 
// import yekatit  from "../Assets/yekatit.jpg";
import { Link } from 'react-router-dom';
const hospitals = [
  {
    name: "Menelik Hospital",
    image: "https://lh5.googleusercontent.com/p/AF1QipNVTepeA4VcoFzkBa9hazYKiENwWezDEJGsOTSM=w500-h500-k-no ",
    address: "Jan Meda, Russia Street, Addis Ababa.",
    location: "https://www.google.com/maps?q=Menelik+Hospital",
    services: "https://www.menelikhospital.com/services",
    Book:"http://localhost:3000/Book",
  },
  {
    name: "Yekatit 12 Hospital",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwmcrVAolZfQXJ-_4Q1PABLCGwAfu4QqlTNzETqFuKA&s",
    address: "Tewodros Street, Addis Ababa.",
    location: "https://www.google.com/maps?q=Yekatit+12+Hospital",
    services: "https://www.yekatit12hospital.com/services",
  },
  {
    name: "St.Paul's Hospital",
    image: "https://quod.lib.umich.edu/c/cirht/images/mpub9712319-hospital.jpg",
    address: "Medical school in Addis Ababa, Ethiopia",
    location: "https://www.google.com/maps?q=St.Paul%27s+Hospital",
    services: "http://localhost:3000/service",
  }
  // Add more hospitals as needed
];

function Facility() {
  return (
    <>
      
      
      <div className='Hospit' >
        <div className="hospitallist">
        
          {hospitals.map((hospital, index) => (
            <div className="hospitaldetail" key={index}>
              <a href={`/Hospital/${index}`} className="hospital-link">
                <img className="hospital-image" src={hospital.image} alt={hospital.name} />
                <div className="hospital-details">
                  <h2>{hospital.name}</h2>
                  <p>Address: {hospital.address}</p>
                  <i class='fas fa-map-marker-alt'></i>
                  <p><a href={hospital.location}  >Location</a></p>

                  <i className='fas fa-stethoscope'></i>
                  <p><a href={hospital.services}  
                  >Services</a></p>
                  <i class="fa fa-calendar"></i>
                  <p><a href={hospital.Book}   >Book</a></p>
                </div>
              </a>
              
            </div>
          ))}
       
        </div>
        <h1 className="All">
        <Link to="/Hospital">All hospitals</Link> 
        <i class='far fa-arrow-alt-circle-right'></i></h1>
     
       </div>
       
      <div className="button">   
      <h5 className="text"> Our Services</h5>
       <button className='serv'>
       <Link to="/dental">Dental</Link>
       </button>
       <button className='serv'>
       <Link to="/maternity">Maternity</Link>
       </button>
       <button className='serv'>
       <Link to="/mentalhealth">Mental Health</Link>
       </button>
       <button className='serv'>
       <Link to="/emergency">Emergency</Link>
      </button>
       <h1 className="All">
        <Link to="/service">All services</Link> <i class='far fa-arrow-alt-circle-right'></i></h1>
    </div>
   
    </>
    
  );
}

export default Facility;