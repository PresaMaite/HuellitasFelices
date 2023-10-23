import { useState } from "react";

import "./Navbar2.css";
import home from "../../assets/navbar2Icons/House.png";
import chat from "../../assets/navbar2Icons/ChatLeftDots.png";
import heart from "../../assets/navbar2Icons/Heart.png";

function Navbar2() {
  const [activo, setActivo] = useState(null);

  const handleIconClick = (index) => {
    setActivo(index);
  };

  return (
    <div className="navbar2">
      <div
        className={`nav2Item ${activo === 1 ? "activo" : ""}`}
        onClick={() => handleIconClick(1)}
      >
        <img src={home} alt="home" height="32px" width="32px" />
        <span>Inicio</span>
      </div>
      <div
        className={`nav2Item ${activo === 2 ? "activo" : ""}`}
        onClick={() => handleIconClick(2)}
      >
        <img src={chat} alt="chat" />
        <span>Chat</span>
      </div>
      <div
        className={`nav2Item ${activo === 3 ? "activo" : ""}`}
        onClick={() => handleIconClick(3)}
      >
        <img src={heart} alt="heart" height="32px" width="32px" />
        <span>Donar</span>
      </div>
    </div>
  );
}

export default Navbar2;
