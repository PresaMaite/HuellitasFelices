import "./../form/AdminForm.css";
import "./../editForm/EditForm.css";
import "./../../layouts/home/Home.css";
import "./AdminSearch.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/input/Input";
import AnimalCard from "../../components/animalcard/AnimalCard";


export const AdminSearch = () => {

  const existingAnimals = JSON.parse(localStorage.getItem("animals")) || [];

  const [search, setSearch] = useState("");

  const searchAninmal = existingAnimals.filter((animal, index) => (
    animal.name.toLowerCase().includes(search.toLowerCase()) || index == search
    ))

  return (
    <>
        <Link to="/admin/home">
            <p className="adminBackBtn"> { `< Volver` } </p>
        </Link>

        <h2 className="adminLayoutTitle" >Galería de mascotas</h2>

        <div className="adminForm">
            <Input
                type="search"
                name="name"
                placeholder="Buscar nombre o ID"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className='animalsContainer animalContainerMargin'>
            {searchAninmal.map((animal, index) => (
                <Link to={`/admin/editForm/${index}`} key={index}>
                    <AnimalCard name={animal.name} photo={animal.image} />
                </Link>
            ))}

        </div>
    </>
  );
};
