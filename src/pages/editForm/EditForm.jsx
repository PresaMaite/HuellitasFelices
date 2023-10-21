import "./../form/AdminForm.css";
import "./EditForm.css";

import { Link } from "react-router-dom";

import { useState } from "react";
import { Input } from "../../components/input/Input";
import { Btn } from "../../components/btn/Btn";


export const EditForm = () => {
  const animalID = 0;
  const existingAnimals = JSON.parse(localStorage.getItem("animals")) || [];
  const selectedAnimal = existingAnimals[animalID];

  const [animal, setAnimal] = useState({
    name: selectedAnimal.name || "",
    type: selectedAnimal.type || "",
    gender: selectedAnimal.gender || "",
    description: selectedAnimal.description || "",
    image: selectedAnimal.image || ""
  });

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setAnimal({ ...animal, image: imageUrl });
    }
  };

  const handleDelete = () => {
    const updatedAnimals = existingAnimals.filter((animal, index) => index !== animalID);
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));

    setAnimal({
      name: "",
      type: "",
      gender: "",
      description: "",
      image: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAnimals = [...existingAnimals];
    updatedAnimals[animalID] = animal;

    localStorage.setItem("animals", JSON.stringify(updatedAnimals));

  };

  return (
    <>
      <Link>
        <p className="adminBackBtn"> { `< Volver` } </p>
      </Link>

      <h2 className="adminLayoutTitle" >Editar datos mascota</h2>

      <form onSubmit={handleSubmit} className="adminForm">
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          value={animal.name}
          onChange={(e) => setAnimal({ ...animal, name: e.target.value })}
        />

        <Input
          type="text"
          name="type"
          placeholder="Raza"
          value={animal.type}
          onChange={(e) => setAnimal({ ...animal, type: e.target.value })}
        />

        <select
          type="text"
          name="gender"
          placeholder="Sexo"
          value={animal.gender}
          onChange={(e) => setAnimal({ ...animal, gender: e.target.value })}
          className='loginInput'
        >
            <option value="female">Hembra</option>
            <option value="male">Macho</option>
        </select>

        <Input
          type="text"
          name="description"
          placeholder="Descripción"
          value={animal.description}
          onChange={(e) =>
            setAnimal({ ...animal, description: e.target.value })}

        />

        <input
          type="file"
          name="image"
          placeholder="Foto"
          onChange={(e) => handleImageChange(e)}
        />

        <div className="adminFormBtn">
          <Btn type="submit" text="Actualizar mascota" />
          <Btn type="submit" text="Eliminar mascota" onClick={handleDelete} isDelete={true}/>
        </div>
      </form>
    </>
  );
};
