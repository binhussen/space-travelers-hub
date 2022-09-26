/** @format */

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="w-screen bg-white p-2 flex items-center justify-around">
    <div className="flex items-center gap-8">
      <img className="w-16" src={logo} alt="logo" />
      <h1 className="font-bold">Space Travelers&apos; Hub</h1>
    </div>
    <ul className="flex items-center list-none gap-8">
      <li>
        <NavLink
          className="text-black text-lg no-underline hover:text-sky-500 hover:underline font-normal"
          to="/"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-black text-lg no-underline hover:text-sky-500 hover:underline font-normal"
          to="/missions"
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-black text-lg no-underline hover:text-sky-500 hover:underline font-normal"
          to="/profile"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
