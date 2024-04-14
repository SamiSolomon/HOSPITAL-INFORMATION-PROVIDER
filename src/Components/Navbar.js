import './Navbar.css';
import React, { useState } from 'react';
import { MenuItems } from "./Menu.js";
import { Link } from "react-router-dom";
  

const initialState = {
  clicked: false
};

function Navbar() {
  const [state, setState] = useState(initialState);

  const handleClick = () => {
    setState({ ...state, clicked: !state.clicked });
  };

  return (
    <header>
    <nav className="NavbarItems">
       <h1  className="fa fa-heartbeat"> Hospital Information</h1>
       
      <div className='menu-icons' onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={state.clicked ? "nav-menu active" : "nav-menu" }>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>
        ))}
      <button className='btn'>
        <a href='#'>BOOK</a>
      </button>
      </ul>
     
    </nav>
    </header>
  );
}

export default Navbar;