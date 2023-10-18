import PropTypes from 'prop-types';
import "./Btn.css";

import decoration from "./../../assets/btnDecoration/btnDecoration.svg";
 
 
export const Btn = ({text, icon}) => {
    return(
        <button className='btnStyles'>
            <div className='btnDecoration' >
                <img src={decoration} alt="" />
                <img src={icon} alt="" className='imgAbsolute' />
            </div>

            <span className='btnText'>{text}</span>
        </button>
    )
}

Btn.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string
}
