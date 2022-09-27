import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const { id, name, description, joined } = mission;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {!joined
          ? <span >Not a member</span>
          : <span >Member</span>}
      </td>
      <td>
        {!joined
          ? <button type="button" onClick={() => dispatch(toggleJoined(id))}>Join Mission</button>
          : <button type="button" onClick={() => dispatch(toggleJoined(id))}>Abort Mission</button>}
      </td>
    </tr>
  );
};
Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.string.isRequired,
  }).isRequired,
};
export default Mission;
