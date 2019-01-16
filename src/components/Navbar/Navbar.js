import React from 'react';

import './Navbar.css';
import piePic from '../../assets/pie.jpeg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
  return(
    <nav>
      <img src={piePic} alt="Pie" />
      <Logout logout={props.logout}/>
    </nav>
  )
}

export default Navbar;