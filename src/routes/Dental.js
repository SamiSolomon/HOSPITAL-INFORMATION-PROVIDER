import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./dental.css"
import { Link } from 'react-router-dom';
const Dental = () => {
  const [hospitals, setHospitals] = useState([]);
  const [dentalServices, setDentalServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the list of hospitals providing dental services
        const hospitalsResponse = await axios.get('/api/hospitals?service=dental');
        setHospitals(hospitalsResponse.data);

        // Fetch the details about the dental services
        const servicesResponse = await axios.get('/api/dental-services');
        setDentalServices(servicesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dental-page">
     
      <h1>Dental Services</h1>
      <div className="hospitalist">
      <Link to="/service"> Services </Link>
        <h2>Hospitals Providing Dental Services</h2>
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="hospital-card">
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <p>Phone: {hospital.phone}</p>
          </div>
        ))}
      </div>
      <div className="dental-services">
        <h2>Dental Services</h2>
        {dentalServices.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dental;