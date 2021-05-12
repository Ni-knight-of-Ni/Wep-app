import React from 'react'

import FLDSkolen_kursuser from './Components/FLDSkolen_kursuser'

import FLDSkolen_blanket from './Components/FLDSkolen_blanket'

import './FLDSkolen.css'




function FLDSkolen() {
  return (
    <div className='FLDSkolen_Grid '>
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


  );
}

export default FLDSkolen;
