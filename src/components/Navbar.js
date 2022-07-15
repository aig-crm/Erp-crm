import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = (props) => {
    return(
        <nav className="navbar navbar-default">
                  <div className='container'>
                    <div className='navbar-header'>
                    <h1 className="mt-3 text-dark"><b><u><center>AIG Royal CRM</center></u></b></h1>
                      <ul className='nav navbar-nav'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/C"}>C tower</Link></li>
                        <li><Link to={"/bookingForm"}>Booking Form</Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>  
    )
}
export default Navbar;