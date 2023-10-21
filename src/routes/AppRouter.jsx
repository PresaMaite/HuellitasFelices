import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../layouts/login/Login";

import { Admin } from "../layouts/admin/Admin";
import { AdminHome } from "../pages/adminHome/AdminHome";
import { AdminForm } from "../pages/form/AdminForm";
import { EditForm } from "../pages/editForm/EditForm";

import Home from "../layouts/home/Home";

import Details from "../layouts/details/Details";


export const AppRouter = () => (
    <BrowserRouter>

        <Routes>

            <Route path="/" element={<Login />} >
            </Route>

            <Route path="/admin" element={<Admin />} >
                <Route path="home" element={<AdminHome />} ></Route>
                <Route path="form" element={<AdminForm />} ></Route>
                {/* <Route path="gallery/:index" element={<AdminGallery />} ></Route> */}
                <Route path="editForm" element={<EditForm />} ></Route>
            </Route>

            <Route path="/home" element={<Home />} >
            </Route>

            <Route path="/details/:index" element={<Details />} >
            </Route>

        </Routes>

    </BrowserRouter>
);
