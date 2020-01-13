import React from 'react';
import logo from './logo.png'
import Tilt from 'react-tilt';
import './Logo.css';

const Logo=()=> {
  return (
    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inne">
            <img className="Tilt-inner"  alt='logo' src={logo} />
        </div>
    </Tilt>

  );
}

export default Logo;
