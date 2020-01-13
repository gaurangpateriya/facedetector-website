import React from 'react';
import './Navigation.css'

const Navigation =({onClick})=> {
  return(
    <div>
        <nav >
          <p onClick={()=>onClick('signin')}> {'SignOut'} </p>
        </nav>
    </div>
  );

}

export default Navigation;
