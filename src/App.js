import './App.css';
 
import Home from './routes/Home.js';
import About from './routes/About.js';
import Service from './routes/Service.js';
import Hospital from './routes/Hospital.js';
import Contact from './routes/Contact.js';
import Book from './routes/Book.js';
 
import { Route, Routes } from "react-router-dom";
import Body from './Body.js';
// import Navigation from './routes/Navigation.js';
import Vision from './routes/VisionPage.js'; 
import Team from './routes/Team.js'; 
import Dental from './routes/Dental.js'; 
import AccountDashboard from './routes/AccountDashboard.js';
import Navbar from './Components/Navbar.js';
import MaternityServices from './routes/Maternity.js';
 import MentalHealthServices from './routes/MentalHealth.js';
import HospitalDetails from './routes/HospitalDetails.js';
 
import { MenuItems } from "./Components/Menu.js";
// import LanguageSelector from './Components/LanguageSelector.js';
 
function App() {
 return (
    <div className='App'>
       {/* <Language/> */}
    <Navbar/> 
    {/* <Language menuItems={MenuItems}/> */}
   {/* <LanguageSelector/> */}
  {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" component={<AccountDashboard/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/Hospital" element={<Hospital />} />
        <Route path="/About" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Book" element={<Book/>} />
        <Route path="/maternity" element={<MaternityServices/>} />
        <Route path="/mentalhealth" element={<MentalHealthServices/>} />
        <Route path="/Hospital/:id" component={<HospitalDetails/>} />
       </Routes>
      
        <Body/>
       
   </div>
    
  );
}

export default App;
