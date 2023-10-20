import './DescriptionCard.css';

import PropTypes from 'prop-types';

import { Btn } from "./../btn/Btn";

import Phone from '../../assets/descriptionCard/Telephone.svg';
import Female from '../../assets/descriptionCard/female.svg';
import Male from '../../assets/descriptionCard/male.svg';



function DescriptionCard({name, breed, gender, description, redirectToWhatsApp}) {
    
    return (
      <div>
        <div className='card1'>
            <div>
            <p className='name'>{name}</p>
            <p className='breed'>{breed}</p>
            </div>
          
            {gender === 'female' ? (
                <img src={Female} alt="Female" />
                ) : (
                <img src={Male} alt="Male" width='40px' height='60px' />
            )}
        </div>
  
        <div className='card2'>
          <p className='description'>{description}</p>
          <Btn text="CONTACTAR" icon={Phone} onClick={() => redirectToWhatsApp()} />
          
        </div>
      </div>
    );
  }

  DescriptionCard.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    redirectToWhatsApp: PropTypes.func.isRequired,
  };
  
  export default DescriptionCard;