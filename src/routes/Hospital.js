import Navbar from '../Components/Navbar';
import './HospitalList.css'; // CSS file for styling
const hospitals = [
  {
    name: "Menelik Hospital",
    image: "https://lh5.googleusercontent.com/p/AF1QipNVTepeA4VcoFzkBa9hazYKiENwWezDEJGsOTSM=w500-h500-k-no ",
    address:"Jan Meda, Russia Street, Addis Ababa. ",
    
    
  },
  {
    name: "Yekatit 12 Hospital",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwmcrVAolZfQXJ-_4Q1PABLCGwAfu4QqlTNzETqFuKA&s",
    address:"Tewodros Street, Addis Ababa. ",
    
  },
  {
    name: "St.Paul's Hospital",
    image: "https://quod.lib.umich.edu/c/cirht/images/mpub9712319-hospital.jpg",
    address:"Medical school in Addis Ababa, Ethiopia", 
    
  }
  // Add more hospitals as needed
];

function Hospital() {
  return (
    <>
    <Navbar/>
    <section className="hospital-list">
      <h1 cla>Hospital List</h1>
      {hospitals.map((hospital, index) => (
        <div className="hospital-card" key={index}>
          <img className="hospital-image" src={hospital.image} alt={hospital.name} />
          <div className="hospital-details">
            <h2>{hospital.name}</h2>
            <p>Address: {hospital.address}</p>
             
          </div>
        </div>
      ))}
    </section>
    </>

  );
}

export default Hospital;
       
   
 