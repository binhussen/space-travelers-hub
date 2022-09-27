/** @format */

import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { name, description, image } = rocket;
  return (
    <div className="flex justify-center items-start py-4 gap-5">
      <img src={image} alt="rocket" className="w-25vw rounded" />
      <div>
        <h2 className="font-medium text-2xl">{name}</h2>
        <p className="mt-2 text-lg max-w-45 ">{description}</p>
        <button
          className="mt-6 px-3 py-2 bg-sky-500 text-white bottom-0 rounded-md cursor-pointer"
          type="button"
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
