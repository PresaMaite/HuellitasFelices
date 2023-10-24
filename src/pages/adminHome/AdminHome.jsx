import "./../form/AdminForm.css";
import "./AdminHome.css";

import { Link } from "react-router-dom";

import { AdminBtn } from "../../components/adminBtn/AdminBtn";


export const AdminHome = () => {

  return (
    <>
        <h2 className="adminLayoutTitle" >¡Bienvenido!</h2>

        <div className="adminBtnContainer">
          <Link to="/admin/form">
            <AdminBtn text="Nueva mascota" />
          </Link>
          

          <Link to="/admin/gallery">
            <AdminBtn text="Galería de animales" />
          </Link>
            
        </div>
    </>
  );
};
