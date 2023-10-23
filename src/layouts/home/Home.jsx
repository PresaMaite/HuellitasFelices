import './Home.css';
import PropTypes from 'prop-types';

import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../../components/navbar/Navbar'; 
import AnimalCard from '../../components/animalcard/AnimalCard'; 
import Navbar2 from '../../components/navbar2/Navbar2'; 
import BtnPetSelect from '../../components/BtnPetSelect/BtnPetSelect';

import huellitasAnimation from "./../../assets/animations/huellitas.json";




function Home() {
  const existingAnimals = JSON.parse(localStorage.getItem("animals")) || [];
  const lastAnimals = existingAnimals.slice(existingAnimals.length-2, existingAnimals.length);


  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const [filter, setFilter] = useState(existingAnimals);

  let filterCallback = (animalFilter) => {
    setFilter(animalFilter);
  }

  
  
  return (
    <div className="home">
      <Navbar />
      <div className='homeContent'>
            <p className='hometext'>Nuevas huellitas en adopción</p>

            <div className='animalsContainer'>
              {lastAnimals.map((animal, index) => (
                    <div key={index}>
                      <AnimalCard name={animal.name} photo={animal.image} />
                    </div>
              ))}
            </div>


            <p className='hometext'>Adoptar una huellita</p>
              <BtnPetSelect animals={existingAnimals} filterCallback={filterCallback} />
            

            <div className='animalsContainer animalContainerMargin'>
              {(isLoading || !existingAnimals) && 
                <Lottie animationData={huellitasAnimation} loop={true} /> 
              }

              {(!isLoading && existingAnimals) && 
                filter.map((animal, index) => (
                  <Link to={`/details/${index}`} key={index}>
                    <AnimalCard name={animal.name} photo={animal.image} />
                  </Link>

                ))
              }

            </div>
        </div>

      <Navbar2 />
    </div>
  );
}

AnimalCard.propTypes = {
    
    photo: PropTypes.any.isRequired
};

export default Home;