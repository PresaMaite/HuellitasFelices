import Swal from 'sweetalert2';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import DescriptionCard from '../../components/descriptioncard/DescriptionCard';
import BackBtn from '../../assets/descriptionCard/backBtn.svg'

import './Details.css';


function Details () {

    const params = useParams();
    const animalID = parseInt(params.index);

    const existingAnimals = JSON.parse(localStorage.getItem("animals")) || [];
    let animal = existingAnimals.find((animal, index) => index === animalID);


    const redirectToWhatsApp = () => {
        Swal.fire({
            title: 'Se abrirá una nueva ventana. ¿Estás seguro?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Continuar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const phoneNumber = '0034611404368'; 
                const message = `Hola, me encantaría adoptar a ${animal.name}#${animalID}. ¿Puedes ayudarme?`; // Mensaje opcional
            
                const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappLink, '_blank');
              
            }
          })


      };


    return (
        <div className='detailsview'>
            <Link to="/home">
                <img src={BackBtn} alt="Regreso" className='backBtn' />
            </Link>
            <div className="backgroundImage" style={{ backgroundImage: `url(${animal.image})` }}></div>
            <div className="detailsContainer">
                <DescriptionCard 
                    name={`${animal.name}#${animalID}`}
                    breed={animal.type} 
                    gender={animal.gender} 
                    description={animal.description}
                    redirectToWhatsApp={redirectToWhatsApp}
                />
            </div>
        </div>    
            

    ); 
}

export default Details;