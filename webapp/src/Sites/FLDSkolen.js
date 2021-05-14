import React from 'react'

import FLDSkolen_kursuser from './Components/FLDSkolen_kursuser'

import FLDSkolen_blanket from './Components/FLDSkolen_blanket'

import './FLDSkolen.css'




function FLDSkolen() {
  return (
    <div className='FLDSkolen_Grid '>
      <div id="kursus" classname="fld-skolen-kursus">
        <h3>Kursuser</h3> 
        <div class="scroll">
      <ul>
        <li>
          <a> fjernvarme AVC - del 1 </a>
        </li>
        <li>
          <a> Fjernvarme ABC - del 2 </a>
        </li>
        <li>
          <a> Korrosion </a>
        </li>
        <li>
          <a> Arbejdes kontract </a>
        </li>
      </ul>  
      </div>
    </div>
      <div className='fld-skolen-tilmelding'>
      
      <h3>Kontakter</h3>
      <div class="search"><input type="text" placeholder="Medarbejder nummer"></input></div>
      <div class="search"><input type="text" placeholder="Afdeling"></input></div>

      </div>

    </div>

  );
}

export default FLDSkolen;
