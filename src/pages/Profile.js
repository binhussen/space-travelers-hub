/** @format */

import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reserved,
  );

  return (
    <section className="flex items-start justify-center gap-12 flex-wrap">
      <h2>My Rockets</h2>
      <table className="my-6 border-collapse w-25vw">
        <tbody>
          {rockets.length > 0 ? (
            rockets.map((rocket) => (
              <tr key={rocket.id}>
                <td className="border-gray-900 p-3">{rocket.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border-gray-900 p-3">
                No Rockets Reserved Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Profile;
