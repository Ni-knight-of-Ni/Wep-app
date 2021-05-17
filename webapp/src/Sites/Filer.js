import React from 'react'

import Bispeparken from './Components/Images/Bispeparken-400x400.jpg'
import Håndbog from './Components/Images/Nymindegaard-400x400.jpg'
import Melstedhusene from './Components/Images/melstedhusene-400x400.jpg'


import './Filer.css'




function Filer() {
  return (
    <div className='filer_Grid '>

    <div className='Filer_projecter'> <h2>Filer</h2></div>

      <div class="Filer_scroll">

          <div className='Filer_projecter1'>
            <img src={Bispeparken} alt='' className='FilerImages' ></img>
            <h2 className='Filer_Title' >Bispeparken</h2>
          </div>

          <div className='Filer_projecter2'>
            <img src={Håndbog} alt='' className='FilerImages'></img>
            <h2 className='Filer_Title' >Håndbog</h2>
          </div>

          <div className='Filer_projecter3'>
            <img src={Melstedhusene} alt='' className='FilerImages'></img>
            <h2 className='Filer_Title' >Melstedhusene</h2>
          </div>

          <div className='Filer_projecter4'>
            <img src={Bispeparken} alt=''  className='FilerImages'></img>
            <h2 className='Filer_Title'>Bispeparken</h2>
          </div>

          <div className='Filer_projecter5'>
            <img src={Melstedhusene} alt=''  className='FilerImages'></img>
            <h2 className='Filer_Title'>Bispeparken</h2>
          </div>

      </div>
    </div>


  );
}

export default Filer;
