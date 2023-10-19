import './DescriptionCard.css';

import { Btn } from "./../btn/Btn";

import Phone from '../../assets/descriptionCard/Telephone.svg';
import Female from '../../assets/descriptionCard/female.png';



function DescriptionCard(gender) {
    const mostrarImagen1 = gender.mostrarImagen1;
    return (
      <div>
        <div className='card1'>
            <div>
            <p className='name'>Cleo</p>
            <p className='breed'>Común Europeo</p>
            </div>
          
            {mostrarImagen1 ? (
                <img src={Female} alt="Female" />
                ) : (
                <img src={Female} alt="Male" />
            )}
        </div>
  
        <div className='card2'>
          <p className='description'>Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga.</p>
          <Btn text="CONTACTAR" icon={Phone}/>
          
        </div>
      </div>
    );
  }
  
  export default DescriptionCard;