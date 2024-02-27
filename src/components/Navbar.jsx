import React from 'react';
import logo from '../images/logo.png';
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <img alt='C.R.I' src={logo}/>
        {/* <div className='navbar-right'>
            <a href='' className='' />
        </div> */}

    </div>
  )
}

export default Navbar