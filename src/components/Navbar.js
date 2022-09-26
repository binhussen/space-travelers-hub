/** @format */

import logo from '../assets/logo.png';

const Navbar = () => (
	<nav>
		<div>
			<img className='logo' src={logo} alt='logo' />
			<h1 className='logo--text'>Space Travelers&apos; Hub</h1>
		</div>
		<ul>
			<li>Rockets</li>
			<li>Missions</li>
			<li>My Profile</li>
		</ul>
	</nav>
);

export default Navbar;
