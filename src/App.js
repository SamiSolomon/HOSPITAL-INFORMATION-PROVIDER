import './App.css';
 
import Home from './routes/Home.js';
import About from './routes/About.js';
import Service from './routes/Service.js';
import Hospital from './routes/Hospital.js';
import Contact from './routes/Contact.js';
import Book from './routes/Book.js';
import { Route, Routes } from "react-router-dom";
import Body from './Body.js';
 
 

function App() {
    

   

  return (
    <div className='App'>

  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Hospital" element={<Hospital />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Book" element={<Book/>} />
      </Routes>
        <Body/>
       
   </div>
    
  );
}

export default App;
