import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';

const Navbar = () => {
	return (
		<>

			<Nav>
				<Bars />
				<NavMenu>
					<div className="mt-3 text-dark">
						<h1 className='Postform'><b>AIGIN Royal</b></h1>
					</div>
					<NavLink to='/' activeStyle><b>
						Home</b>
					</NavLink>
					<NavLink to='/C' activeStyle><b>
						C Tower</b>
					</NavLink>
					<NavLink to='/B' activeStyle><b>
						B Tower</b>
					</NavLink>
					<NavLink to='/A' activeStyle><b>
						A Tower</b>
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

export default Navbar;
