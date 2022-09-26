/** @format */

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav>
    <div>
      <img src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
