import PropTypes from 'prop-types';

import './AnimalCard.css'

function AnimalCard({ name, photo }) {
  return (
    <div className="animalCard">
      <img src={photo} alt={name} />
    </div>
  );
}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
};

export default AnimalCard;