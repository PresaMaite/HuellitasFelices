import "./BtnPetSelect.css";
import React, { useState } from "react";

function BtnPetSelect({animals}) {
  const [selectedAnimals, setSelectedAnimals] = useState(animals);
  console.log(selectedAnimals);
  console.log(animals);

 

  //  BtnPetSelect = () => {
  //   setIsActive(!isActive);
  //   props.onClick(); // Llama a la función `onClick` proporcionada por el componente padre
  // };

  const selectAll = () => {
    console.log("selecting all");
  };

  const selectCats = () => {
    console.log("selecting cats");
    setSelectedAnimals (animals.filter((animal) => animal.type === "CAT"));
    console.log("Selected cats: ", selectedAnimals);
  };

  const selectDogs = () => {
    console.log("selecting dogs");
    setSelectedAnimals (animals.filter((animal) => animal.type === "DOG"));
    console.log("Selected cats: ", selectedAnimals);
  };

  return (
    <div>
      <div id="buttons">
        <button
          onClick={selectAll}
          className="active"
         
        >
          Todos
        </button>
        <button
          onClick={selectCats}
         
        >
          Gatos
        </button>
        <button
          onClick={selectDogs}
         
        >
          Perros
        </button>
      </div>
      <div id="animals-list">
        {selectedAnimals.map((animal, index) => (
          <div key={index}>{animal.description}</div>
        ))}
      </div>
    </div>
  );
}

export default BtnPetSelect;
