// MaternityServices.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./maternity.css"
const MaternityServices = () => {
  const [hospitals, setHospitals] = useState([]);
  const [maternityServices, setMaternityServices] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals?service=maternity');
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    const fetchMaternityServices = async () => {
      try {
        const response = await axios.get('/api/maternity');
        setMaternityServices(response.data);
      } catch (error) {
        console.error('Error fetching maternity services:', error);
      }
    };

    fetchHospitals();
    fetchMaternityServices();
  }, []);

  return (
    <div className='maternity'>
      <h1>Maternity Services</h1>
      <h2>Hospitals Offering Maternity Services</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <p>Phone: {hospital.phone}</p>
            <h4>Maternity Services</h4>
            <ul>
              {hospital.services.filter((service) => service.id in maternityServices).map((service) => (
                <li key={service.id}>
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                  {service.id in maternityServices && (
                    <div>
                      <p>Bed Count: {maternityServices[service.id].bed_count}</p>
                      <p>NICU Available: {maternityServices[service.id].nicu_available ? 'Yes' : 'No'}</p>
                      <p>Visiting Hours: {maternityServices[service.id].visiting_hours}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaternityServices;