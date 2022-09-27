import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const { id, name, description } = mission;
  return (
    <tr>
      <td>{name}</td>
      <thead>{description}</thead>
      <td>
        <span>Not a member</span>
      </td>
      <td>
        <button
          type="button"
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};
Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default Mission;
