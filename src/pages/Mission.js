import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/Mission';
import { getMissions } from '../redux/missions/missions';
const Missions = () => {
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);
  return (
    <section>
    </section>
  );
};
export default Missions;