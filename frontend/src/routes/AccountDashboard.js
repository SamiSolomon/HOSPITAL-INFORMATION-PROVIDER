import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./accountDashboard.css"
const AccountDashboard = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch the user's information
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/me');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch the user's upcoming appointments
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments/upcoming');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchUserData();
    fetchAppointments();
  }, []);

  const handleProfileUpdate = async (updatedProfile) => {
    try {
      await axios.put('/api/users/me', updatedProfile);
      setUser(updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleAppointmentCancel = async (appointmentId) => {
    try {
      await axios.delete(`/api/appointments/${appointmentId}`);
      setAppointments(appointments.filter((appointment) => appointment.id !== appointmentId));
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Account Dashboard</h1>
      <div>
        <h2>Your Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={() => handleProfileUpdate({ ...user, name: 'New Name' })}>
          Update Profile
        </button>
      </div>
      <div>
        <h2>Your Upcoming Appointments</h2>
        {appointments.length === 0 ? (
          <p>You don't have any upcoming appointments.</p>
        ) : (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <p>Hospital: {appointment.hospital.name}</p>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <button onClick={() => handleAppointmentCancel(appointment.id)}>
                  Cancel Appointment
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AccountDashboard;