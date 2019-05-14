import React from 'react';
import './Imagview.css';
import 'tachyons';


const Imagview=({imagebox,imageurl})=> {
  return (
    <div className='center tc ma4'>
      <div className='absolute tc mt2'>
        <img id='inputimage' className='tc'alt='' src={imageurl} />
        <div className='bounding-box' style={{top: imagebox.topRow, right: imagebox.rightCol, bottom: imagebox.bottomRow, left: imagebox.leftCol}}></div>
      </div>
    </div>

  );
}

export default Imagview;
