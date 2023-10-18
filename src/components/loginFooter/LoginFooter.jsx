import PropTypes from 'prop-types';
import "./LoginFooter.css";


export const LoginFooter = ({text}) => {
    return(
        <div className='loginFooter'>
            <p>{text}</p>
        </div>
    )
}

LoginFooter.propTypes = {
    text: PropTypes.string
}
