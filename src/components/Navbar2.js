import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';

const Navbar2 = (props) => {

	const url = (props.value);
	return (
		<>

			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to={url} activeStyle><b>
						Booking Form</b>
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
		<NavBtnLink to='/home'>Home</NavBtnLink>
		</NavBtn> */}
			</Nav>
			<Outlet />

		</>
	);
};

export default Navbar2;
