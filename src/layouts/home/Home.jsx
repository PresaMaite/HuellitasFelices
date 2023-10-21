import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar'; 
import AnimalCard from '../../components/animalcard/AnimalCard'; 
import Navbar2 from '../../components/navbar2/Navbar2'; 

import './Home.css';


function Home() {
  const existingAnimals = JSON.parse(localStorage.getItem("animals")) || [];
  const lastAnimals = existingAnimals.slice(existingAnimals.length-2, existingAnimals.length)
  
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

            <div className='animalsContainer animalContainerMargin'>

                {existingAnimals.map((animal, index) => (
                  <Link to={`/details/${index}`} key={index}>
                    <AnimalCard name={animal.name} photo={animal.image} />
                  </Link>

                ))}

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