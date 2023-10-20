import "./../form/AdminForm.css";
import "./AdminHome.css";

import { AdminBtn } from "../../components/adminBtn/AdminBtn";


export const AdminHome = () => {

  return (
    <>
        <h2 className="adminLayoutTitle" >¡Bienvenido!</h2>

        <div className="adminBtnContainer">
            <AdminBtn text="Nueva mascota" />
            <AdminBtn text="Galería de animales" />
        </div>
    </>
  );
};
