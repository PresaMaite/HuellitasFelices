import "./../form/AdminForm.css";
import "./../editForm/EditForm.css";
import "./../../layouts/home/Home.css";
import "./AdminSearch.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";

import { Input } from "../../components/input/Input";
import AnimalCard from "../../components/animalcard/AnimalCard";
import huellitasAnimation from "./../../assets/animations/huellitas.json";


export const AdminSearch = () => {

  const existingAnimals = JSON.parse(localStorage.getItem("animals")) || [];

  const [search, setSearch] = useState("");

  const searchAninmal = existingAnimals.filter((animal, index) => (
    animal.name.toLowerCase().includes(search.toLowerCase()) || index == search
    ))

    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

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
            {(isLoading || existingAnimals.length == 0) && 
                <Lottie animationData={huellitasAnimation} loop={true} /> 
            }

            {(!isLoading && existingAnimals.length >= 1) &&
                searchAninmal.map((animal, index) => (
                    <Link to={`/admin/editForm/${index}`} key={index}>
                        <AnimalCard name={animal.name} photo={animal.image} />
                    </Link>
                ))
            }

        </div>
    </>
  );
};
