import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/Mission';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);
  return (
    <section className="flex justify-center items-center w-80vw my-5vh mx-auto">
      <table className="border-collapse rounded text-base w-full table-auto border">
        <thead>
          <tr>
            <th className="text-lg text-center border p-3">Mission</th>
            <th className="text-lg text-center border p-3">Description</th>
            <th className="text-lg text-center border p-3" colSpan="2">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Missions;
