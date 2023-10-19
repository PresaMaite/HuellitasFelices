import './Navbar.css';
import Paw from "../../assets/navbar/Logo.svg";
import User from "../../assets/navbar/PersonCircle.png"


function Navbar() {
  return (
    <div className="navbar">
      <img src={Paw} alt="logo" />
      <img src={User} alt="user"/>
    </div>
  );
}

export default Navbar;