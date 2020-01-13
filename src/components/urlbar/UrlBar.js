import React from 'react';
import './UrlBar.css';
import 'tachyons';

const UrlBar=({userinfo,oninputchange,onbuttonclick })=>{
  return (
    <div  className='bar ' >
        < p className='f2 b'>{`Hey ${userinfo.name} !!! your entries are ${userinfo.entries}`}</p>

        <p className='f4 '>{"Hey there!!! enter the link of the image and it will detect the faces in the photo... "}</p>

      <div className='' >
        <div className='b1 pa4 ml6 mr6'>

            <input  className='pa3 w-70' type='text' onChange={oninputchange} placeholder='Enter the url of photo' />
            <button className=' pa3 grow w-30 pointer ' onClick={onbuttonclick}>{'Detect!!!'}</button >
        </div>
      </div>
    </div>
  );
}

export default UrlBar;
