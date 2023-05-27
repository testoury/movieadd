import React from 'react';
import './css/nav.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  return (
    <div className="navbar"  >
   
      <ul style={{display:"flex" , flexDirection:"row", }}>
       
        <li style={{marginLeft:'2rem'}}><Link  to="/Home"><button>Home</button></Link ></li>
        <li style={{marginLeft:'2rem'}}><Link to="/Favlist"><button>Favorite</button></Link></li>
        <li style={{marginLeft:'2rem'}} ><Link to="/Contact"><button>Contact</button></Link></li>
        
      </ul>
      
    </div>
  );
};

export default Navbar;