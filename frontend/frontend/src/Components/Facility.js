import "./facility.css";
import menelik from "../Assets/menelik.jpg";
import yekatit  from "../Assets/yekatit.jpg";
function Facility() {
  return (
    <div className="listFacility">
      <h1>  Our Facilities</h1>
       <div className="facility">
         
          <div className="fist-fac">
      
    
        <div className="fac-text">
        <div className="image"> 
          <img alt="img" src={menelik}/> 
        </div>
          <h3>Menelik II Referral Hospital</h3>
       <p><span className="description">Address</span>: Jan Meda, Russia Street, Addis Ababa.<br/> Location, Addis Ababa, Ethiopia.</p>
        </div>
         
       </div>
     
      <div className="second-fac">
      <div className="image2" >
        <img alt="img" src={yekatit}/> 

        </div>
        <h4>Yekatit 12 Referral Hospital</h4>
        <p> <span className="description">Address</span>: Tewodros Street, Addis Ababa.<br/> Location, Addis Ababa, Ethiopia. </p>
        </div>
        
     
       </div>
       <h1 className="All"><a href='http://localhost:3000/Hospital'>All Hospital</a> <i class='far fa-arrow-alt-circle-right'></i></h1>
      <div className="button">   
      <h5 className="text"> Our Services</h5>
       <button className='serv'>
        <a href='#'>Dental</a>
       </button>
       <button className='serv'>
        <a href='#'>Maternity</a>
       </button>
       <button className='serv'>
        <a href='#'>Mental Health</a>
       </button>
       <button className='serv'>
        <a href='#'>Emergency</a>
      </button>
       <h1 className="All"><a href='http://localhost:3000/service'>All services</a> <i class='far fa-arrow-alt-circle-right'></i></h1>
    </div>
   
    </div>
  );
}

export default Facility;