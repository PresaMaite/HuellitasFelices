import PropTypes from 'prop-types';
import "./Input.css";


export const Input = ({value, type, name, placeholder, onChange}) => (

    <input className='loginInput'
        type={type} 
        value={value} 
        name={name} 
        placeholder={placeholder}
        onChange={onChange}
    />

)

Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.any
  };
