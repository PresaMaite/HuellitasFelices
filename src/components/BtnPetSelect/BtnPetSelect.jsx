import "./BtnPetSelect.css";
import React, { useState } from "react";

function BtnPetSelect({ animals }) {
  const [data, setData] = useState({
    selectedAnimals: animals,
    selected: "all",
  });
  console.log(data);

  const selectAll = () => {
    console.log("selecting all");
    setData({
      selectedAnimals: animals,
      selected: "all",
    });
  };

  const selectCats = () => {
    console.log("selecting cats");
    setData({
      selectedAnimals: animals.filter((animal) => animal.type === "CAT"),
      selected: "cats",
    });
    console.log("Selected cats: ", data.selectedAnimals);
  };

  const selectDogs = () => {
    console.log("selecting dogs");
    setData({
      selectedAnimals: animals.filter((animal) => animal.type === "DOG"),
      selected: "dogs",
    });
    console.log("Selected dogs: ", data.selectedAnimals);
  };

  return (
    <div>
      <div id="buttons">
        <button
          onClick={selectAll}
          className={data.selected == "all" ? "active" : ""}
        >
          Todos
        </button>
        <button
          onClick={selectCats}
          className={data.selected == "cats" ? "active" : ""}
        >
          Gatos
        </button>
        <button
          onClick={selectDogs}
          className={data.selected == "dogs" ? "active" : ""}
        >
          Perros
        </button>
      </div>
      <div id="animals-list">
        {data.selectedAnimals.map((animal, index) => (
          <img src={animal.image} className="animal" key={index} />
        ))}
      </div>
    </div>
  );
}

export default BtnPetSelect;
