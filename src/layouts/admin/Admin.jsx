import "./Admin.css";

import { AdminForm } from "../../pages/form/AdminForm";
import Navbar from "../../components/navbar/Navbar";

export const Admin = () => {
    return(
        <>
            <Navbar/>
            <main className="adminOutlet">
                <AdminForm/>

            </main>
            
        </>
    )
}
