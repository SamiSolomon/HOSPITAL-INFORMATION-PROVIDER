import React, { useState } from 'react'; 
import "./BookStyles.css";
import Navbar from '../Components/Navbar';
 
function Book() {
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API
    console.log('Form submitted:', { selectedHospital, selectedService, name, lastname, appointmentDate });
    // Reset form fields
    setSelectedHospital('');
    setSelectedService('');
    setName('');
    setLastname('');
    setAppointmentDate('');
    alert('Appointment booked successfully!');
  };
  
  const handleHospitalChange = (e) => {
    setSelectedHospital(e.target.value);
  };
  
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };
  const handleAppointmentDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    if (selectedDate >= today) {
      setAppointmentDate(e.target.value);
    } else {
      alert('Please select a date that is not before today.');
    }
  };
  return (
    <>
      <Navbar />
      <div className="information">
        <h3>Important Information:</h3>
        <p>Please read the following information before scheduling your appointment:</p>
        <ul>
          <li>Make sure to arrive at least 15 minutes before your scheduled appointment time.</li>
          <li>Bring your identification card and any relevant medical documents with you.</li>
          <li>Payment is required at the time of the appointment. We accept cash and major credit cards.</li>
          <li>Please note that appointment cancellation should be done at least 24 hours in advance.</li>
        </ul>
      </div>
      <div className="Book">
        <div className="booking-form">
          <h1>Booking Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="hospital">Hospital:</label>
              <select
                id="hospital"
                value={selectedHospital}
                onChange={handleHospitalChange}
                required
              >
                <option value="">Select a hospital</option>
                <option value="hospital1">Menelik Hospital</option>
                <option value="hospital2">Yekatit Hospital</option>
                <option value="hospital3">St.Paul's Hospital</option>
                {/* Add more options for other hospitals */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service:</label>
              <select
                id="service"
                value={selectedService}
                onChange={handleServiceChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="service1">Dental</option>
                <option value="service2">Maternity</option>
                <option value="service3">Gynecology</option>
                <option value="service4">others</option>
                {/* Add more options for other services */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">First Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                pattern="[a-zA-Z\s]+"
                title="Name should only contain letters"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                pattern="[a-zA-Z\s]+"
                title="Last name should only contain letters"
              />
            </div>
            <div className="form-group">
            <label htmlFor="appointment-date">Appointment Date:</label>
            <input
              type="date"
              id="appointment-date"
              value={appointmentDate}
              onChange={handleAppointmentDateChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
            <button type="submit">Book Appointment</button>
          </form>
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
     
    
 
    </>
  );
}

export default Book;