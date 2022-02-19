import React, { useState } from 'react';
import RightMenu from './section/rightMenu';
import './section/nav.css';

function NavBar() {

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>

      <div className="menu__container">
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
       
      </div>
      
    </nav>
  )
}

export default NavBar