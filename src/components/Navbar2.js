import React from 'react';
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
					<NavLink to='applicant' activeStyle><b>
						Applicants</b>
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
		<NavBtnLink to='/home'>Home</NavBtnLink>
		</NavBtn> */}
			</Nav>

		</>
	);
};

export default Navbar2;
