import React, { useState } from 'react';
import RightMenu from './section/rightMenu';
import './section/nav.css';

function NavBar() {

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', backgroundColor: '#ffe2d8'}}>
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu_rigth">
          <RightMenu mode="horizontal" />
      </div>
      
    </nav>
  )
}

export default NavBar