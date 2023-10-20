import DescriptionCard from '../../components/descriptioncard/DescriptionCard';
import Gatin2 from '../../assets/homePhotos/gatin2.png';
import BackBtn from '../../assets/descriptionCard/backBtn.svg'

import './Details.css';

function Details () {

    return (
        <div className='detailsview'>
            <div>
                <img src={BackBtn} alt="Regreso" className='backBtn' />
            </div>
            <div className="backgroundImage" style={{ backgroundImage: `url(${Gatin2})` }}></div>
            <div className="detailsContainer"><DescriptionCard name='Cleo' breed='Común Europeo' gender='female' description='Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga.'/></div>
        </div>    
            

    ); 
}

export default Details;