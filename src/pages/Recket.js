/** @format */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <section>
      <h1>Rockets</h1>
    </section>
  );
};

export default Rocket;
