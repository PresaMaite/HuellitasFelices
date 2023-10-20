import PropTypes from 'prop-types';
import "./Btn.css";

import decoration from "./../../assets/btnDecoration/btnDecoration.svg";
 
 
export const Btn = ({text, icon, type}) => {
    return(
        <button className='btnStyles' type={type}>
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
    icon: PropTypes.string,
    type: PropTypes.string
}
