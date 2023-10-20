import DescriptionCard from '../../components/descriptioncard/DescriptionCard';
import Gatin2 from '../../assets/homePhotos/gatin2.png';
import BackBtn from '../../assets/descriptionCard/backBtn.svg'

import './Details.css';

function Details () {
    const redirectToWhatsApp = () => {
        const phoneNumber = '0034611404368'; 
        const message = 'Hola, me encantaría adoptar ¿Puedes ayudarme?'; // Mensaje opcional
    
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
      };

    return (
        <div className='detailsview'>
            <div>
                <img src={BackBtn} alt="Regreso" className='backBtn' />
            </div>
            <div className="backgroundImage" style={{ backgroundImage: `url(${Gatin2})` }}></div>
            <div className="detailsContainer">
                <DescriptionCard 
                    name='Cleo' 
                    breed='Común Europeo' 
                    gender='female' 
                    description='Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga.'
                    redirectToWhatsApp={redirectToWhatsApp}
                />
            </div>
        </div>    
            

    ); 
}

export default Details;