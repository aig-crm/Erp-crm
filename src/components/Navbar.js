import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';
import logo from '../assets/logo.png';
import { Grid } from '@material-ui/core';

const Navbar = () => {
	return (
		<div>
			<Grid container spacing={3} className='Postform' style={{ backgroundColor: "#F1E5AC" }}>
				<Grid item xs={12} sm={1}>
					<img className='img' src={logo} alt="logo" />
				</Grid>
				<Grid item xs={12} sm={2}>
					<h3 className='postform'><b>AIGIN Royal</b></h3>
				</Grid>
			</Grid>

			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to='/' activeStyle><b>
						Home</b>
					</NavLink>
					<NavLink to='/D' activeStyle><b>
						D Tower</b>
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
		</div>
	);
};

export default Navbar;
