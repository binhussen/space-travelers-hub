/** @format */

import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reserved,
  );
  const missions = useSelector((state) => state.missions).filter(
    (mission) => mission.joined,
  );
  return (
    <section className="flex items-start justify-center gap-12 flex-wrap my-8">
      <div>
        <h2 className="text-lg font-bold">My Rockets</h2>
        <table className="my-6 border-collapse w-25vw">
          <tbody>
            {rockets.length > 0 ? (
						  rockets.map((rocket) => (
  <tr key={rocket.id}>
    <td className="p-3 border">{rocket.name}</td>
  </tr>
						  ))
            ) : (
              <tr>
                <td className="p-3 border">No Rockets Reserved Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-lg font-bold">My Missions</h2>
        <table className="my-6 border-collapse w-25vw border">
          <tbody>
            {missions.length > 0 ? (
						  missions.map((mission) => (
  <tr key={mission.id}>
    <td className="p-3 border">{mission.name}</td>
  </tr>
						  ))
            ) : (
              <tr>
                <td className="border-gray-900 p-3">
                  No Mission joined Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
