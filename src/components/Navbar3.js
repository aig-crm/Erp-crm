import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';

const Navbar3 = (props) => {
	const url = '/' + (props.value) + '/' + 'reports';
	const url2 = '/' + (props.value) + '/' + 'bookings';

	if (props.value != null) {
		return (
			<>

				<Nav>
					<Bars />
					<NavMenu>
						<NavLink to={url} state={{ tower: (props.value) }} activeStyle><b>
							Reports</b>
						</NavLink>
						<NavLink to={url2} state={{ tower: (props.value) }} activeStyle><b>
							All bookings</b>
						</NavLink>
						<NavLink to='bookingform' activeStyle><b>
							Booking Form</b>
						</NavLink>
						<NavLink to='applicant' activeStyle><b>
							Applicants</b>
						</NavLink>
						<NavLink to='cancelBookings' activeStyle><b>
							Cancel Bookings</b>
						</NavLink>
						<NavLink to='canceledBookings' activeStyle><b>
							Cancelled Bookings</b>
						</NavLink>
						{/* Third Nav */}
						{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
					</NavMenu>
					{/* <NavBtn>
		<NavBtnLink to='/home'>Home</NavBtnLink>
		</NavBtn> */}
				</Nav>
				<Outlet />

			</>
		);
	} else {
		return (
			<>

				<Nav>
					<Bars />
					<NavMenu>
						<NavLink to='/reports' state={{ tower: (props.value) }} activeStyle><b>
							Reports</b>
						</NavLink>
						<NavLink to='/bookings' state={{ tower: (props.value) }} activeStyle><b>
							All bookings</b>
						</NavLink>
						<NavLink to='/brokers' state={{ tower: (props.value) }} activeStyle><b>
							Brokers</b>
						</NavLink>
						{/* Third Nav */}
						{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
					</NavMenu>
					{/* <NavBtn>
		<NavBtnLink to='/home'>Home</NavBtnLink>
		</NavBtn> */}
				</Nav>
				<Outlet />

			</>
		);
	}
};

export default Navbar3;
