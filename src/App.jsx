import "./App.css";
import BtnPetSelect from "./components/BtnPetSelect/BtnPetSelect";
import React, { useState } from "react";

function App() {

   const animals = [
    { type: "CAT", description: "Cat 1", image: "assets/cats/cat1.jpg" },
    { type: "DOG", description: "Dog 1", image: "assets/d/dog1.jpg" },
  
   ];
  return (
    <>
      <BtnPetSelect animals={animals}></BtnPetSelect>
    </>
  );
}

export default App;
