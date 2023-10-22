import "./../form/AdminForm.css";
import "./EditForm.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

import { useState } from "react";
import { Input } from "../../components/input/Input";
import { Btn } from "../../components/btn/Btn";


export const EditForm = () => {
  const params = useParams();
  const animalID = parseInt(params.index);

  const history = useNavigate();
  console.log('his',history)
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
    Swal.fire({
      title: '¿Seguro que quieres borrarlo?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Borrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Borrado!', '', 'success');
        const updatedAnimals = existingAnimals.filter((animal, index) => index !== animalID);
        localStorage.setItem("animals", JSON.stringify(updatedAnimals));
    
        setAnimal({
          name: "",
          type: "",
          gender: "",
          description: "",
          image: ""
        });

        history("/admin/gallery");
      }
    })

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: '¿Quieres guardar los cambios?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
        const updatedAnimals = [...existingAnimals];
        updatedAnimals[animalID] = animal;
    
        localStorage.setItem("animals", JSON.stringify(updatedAnimals));
      }
    })
    

  };

  return (
    <>
      <Link to="/admin/gallery">
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
            <option value="">Seleciona el sexo</option>
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
          <Btn type="button" text="Eliminar mascota" onClick={handleDelete} isDelete={true}/>
        </div>
      </form>
    </>
  );
};
