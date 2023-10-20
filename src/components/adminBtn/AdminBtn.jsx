import PropTypes from 'prop-types';
import "./AdminBtn.css";

export const AdminBtn = ({text}) => {
    return(
        <button className="adminBtn">
            {text}
        </button>
    )
}

AdminBtn.propTypes = {
    text: PropTypes.string
  };
