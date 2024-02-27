import React from 'react';
import './style.css'
import * as Icon from 'react-feather';
function Footer() {
  return (
    <footer className="fadeInUp" style={{animationDelay:'2s'}}>
    <a href='/' target='__blank' className='github'><Icon.Phone color={"#ffff"}/>Toll free <span>1800 200 1234</span></a>
    <a href='https://facebook.com/cripumps' target='__blank' className='facebook'><Icon.Facebook  color={"#ffff"}/>www.facebook.com/cripumps</a>
    <a href='https://www.crigroups.com' target='__blank' className='globe'><Icon.Globe  color={"white"}/>www.crigroups.com</a>
</footer>

  )
}

export default Footer