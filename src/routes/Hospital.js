import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './HospitalList.css'; // CSS file for styling

const hospitals = [
  {
    name: "Menelik Hospital",
    image: "https://lh5.googleusercontent.com/p/AF1QipNVTepeA4VcoFzkBa9hazYKiENwWezDEJGsOTSM=w500-h500-k-no ",
    address: "Jan Meda, Russia Street, Addis Ababa.",
    location: "https://www.google.com/maps?q=Menelik+Hospital",
    services: "https://www.menelikhospital.com/services",
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
    services: "https://www.stpaulshospitalethiopia.com/services",
  }
  // Add more hospitals as needed
];

function Hospital() {
  return (
    <>
      <Navbar />
      <div  className='listHospital'>
      <div className='Hospitals' >
      
      <p>
      <h1>List of Hospitals</h1>
        These are the some hospitals in Addis Ababa
      </p>
      <img className="Hospital-image" src="https://www.centralwest.health.qld.gov.au/__data/assets/image/0019/120565/Banner-6.png" alt= "" />
      </div>
      </div>
      <div className='Hospit' >
        <div className="hospital-list">
        
          {hospitals.map((hospital, index) => (
            <div className="hospital-card" key={index}>
              <a href={`/Hospital/${index}`} className="hospital-link">
                <img className="hospital-image" src={hospital.image} alt={hospital.name} />
                <div className="hospital-details">
                  <h2>{hospital.name}</h2>
                  <p>Address: {hospital.address}</p>
                  <i class='fas fa-map-marker-alt'></i>
                  <p><a href={hospital.location}  >Location</a></p>

                  <i className='fas fa-stethoscope'></i>
                  <p><a href={hospital.services}   >Services</a></p>
                </div>
              </a>
            </div>
          ))}
        </div>
        </div>
    
      <Footer />
    </>
  );
}

export default Hospital;