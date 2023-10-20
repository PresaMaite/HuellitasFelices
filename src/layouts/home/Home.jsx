import PropTypes from 'prop-types';

import Navbar from '../../components/navbar/Navbar'; 
import AnimalCard from '../../components/animalcard/AnimalCard'; 
import Navbar2 from '../../components/navbar2/Navbar2'; 

import './Home.css'

import Perrin from '../../assets/homePhotos/perrin.jpg';
import Gatin from '../../assets/homePhotos/gatin.png';
import Perrin2 from '../../assets/homePhotos/perrin2.jpg';
import Gatin2 from '../../assets/homePhotos/gatin2.png';



function Home() {
  
  return (
    <div className="home">
      <Navbar />
      <div className='homeContent'>
            <p className='hometext'>Nuevas huellitas en adopción</p>

<           div className="animalCardContainer">
                <AnimalCard photo={Perrin} />
                <AnimalCard photo={Gatin} />

            </div>

            <p className='hometext'>Adoptar una huellita</p>

            <div className="animalCardContainer">
                <AnimalCard photo={Perrin2} />
                <AnimalCard photo={Gatin2} />

            </div>
        </div>

      <Navbar2 />
    </div>
  );
}

AnimalCard.propTypes = {
    
    photo: PropTypes.string.isRequired
};

export default Home;