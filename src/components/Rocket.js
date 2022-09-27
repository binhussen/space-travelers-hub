/** @format */

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserved } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, name, description, image, reserved,
  } = rocket;
  return (
    <div className="flex justify-center items-start py-4 gap-5">
      <img src={image} alt="rocket" className="w-25vw rounded" />
      <div>
        <h2 className="font-medium text-2xl">
          {name}
          {reserved && (
          <span className="ml-2 p-0.5 bg-green-500 text-white text-xs rounded-md align-super">
            Reserved
          </span>
          )}
        </h2>
        <p className="mt-2 text-lg max-w-45 ">{description}</p>
        {reserved ? (
          <button
            className="mt-6 px-3 py-2 bg-red-500 text-white bottom-0 rounded-md cursor-pointer"
            type="button"
            onClick={() => dispatch(toggleReserved(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            className="mt-6 px-3 py-2 bg-sky-500 text-white bottom-0 rounded-md cursor-pointer"
            type="button"
            onClick={() => dispatch(toggleReserved(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
