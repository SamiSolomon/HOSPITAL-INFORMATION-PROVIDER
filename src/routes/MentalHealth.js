// MentalHealthServices.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./mentalHealth.css"
const MentalHealthServices = () => {
  const [hospitals, setHospitals] = useState([]);
  const [mentalHealthServices, setMentalHealthServices] = useState({});

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals?service=mental-health');
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    const fetchMentalHealthServices = async () => {
      try {
        const response = await axios.get('/api/mental-health');
        setMentalHealthServices(response.data);
      } catch (error) {
        console.error('Error fetching mental health services:', error);
      }
    };

    fetchHospitals();
    fetchMentalHealthServices();
  }, []);

  return (
    <div className='mentalHealth'>
      <h1>Mental Health Services</h1>
      <h2>Hospitals Offering Mental Health Services</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <p>Phone: {hospital.phone}</p>
            <h4>Mental Health Services</h4>
            <ul>
              {hospital.services.filter((service) => service.id in mentalHealthServices).map((service) => (
                <li key={service.id}>
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                  {service.id in mentalHealthServices && (
                    <div>
                      <p>Bed Count: {mentalHealthServices[service.id].bed_count}</p>
                      <p>Specialized Clinicians: {mentalHealthServices[service.id].specialized_clinicians}</p>
                      <p>Support Groups: {mentalHealthServices[service.id].support_groups}</p>
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

export default MentalHealthServices;