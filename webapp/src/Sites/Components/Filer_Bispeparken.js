import React from 'react'

import Bispeparken from './Components/Images/Bispeparken-400x400.jpg'
import Håndbog from './Components/Images/Nymindegaard-400x400.jpg'
import Melstedhusene from './Components/Images/melstedhusene-400x400.jpg'


import './Filer.css'




function Filer() {
  return (
    <div className='filer_Grid '>


          <ul>
            <div>
              <button type="button"> fjernvarme AVC - del 1 </button>
            </div>
            <li>
              <button type="button"> Fjernvarme ABC - del 2 </button>
            </li>
            <li>
              <button type="button"> Korrosion </button>
            </li>
            <li>
              <button type="button"> Arbejdes kontract </button>
            </li>
          </ul>




    </div>


  );
}

export default Filer;
