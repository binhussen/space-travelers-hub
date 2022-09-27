/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);
  return (
    <section className="flex items-center flex-col mt-5">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </section>
  );
};

export default Rockets;
