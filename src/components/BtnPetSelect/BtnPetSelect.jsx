import "./BtnPetSelect.css";
import PropTypes from 'prop-types';

import { useState } from "react";


function BtnPetSelect({ animals, filterCallback }) {
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
    filterCallback(animals);
  };

  const selectCats = () => {
    console.log("selecting cats");
    setData({
      selectedAnimals: animals.filter((animal) => animal.animal === "CAT"),
      selected: "cats",
    });
    console.log("Selected cats: ", data.selectedAnimals);
    filterCallback(animals.filter((animal) => animal.animal === "CAT"));
  };

  const selectDogs = () => {
    console.log("selecting dogs");
    setData({
      selectedAnimals: animals.filter((animal) => animal.animal === "DOG"),
      selected: "dogs",
    });
    console.log("Selected dogs: ", data.selectedAnimals);
    filterCallback(animals.filter((animal) => animal.animal === "DOG"));
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
    </div>
  );
}

BtnPetSelect.propTypes = {
  animals: PropTypes.any,
  filterCallback: PropTypes.any
};

export default BtnPetSelect;
