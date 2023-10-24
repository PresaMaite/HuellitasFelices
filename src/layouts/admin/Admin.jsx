import "./Admin.css";

import { Outlet } from "react-router";

import Navbar from "../../components/navbar/Navbar";


export const Admin = () => {
    return(
        <>
            <Navbar/>
            
            <main className="adminOutlet">
                <Outlet/>
            </main>
            
        </>
    )
}
