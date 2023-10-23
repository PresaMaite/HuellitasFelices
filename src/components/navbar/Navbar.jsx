import './Navbar.css';
import Paw from "../../assets/navbar/Logo.svg";
import User from "../../assets/navbar/PersonCircle.png";

import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar">
      <img src={Paw} alt="logo" />
      <Link to="/">
        <img src={User} alt="user"/>
      </Link>
      
    </div>
  );
}

export default Navbar;