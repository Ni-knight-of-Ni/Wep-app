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
          <button type="button"> fjernvarme AVC - del 1 </button>
          </li>
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
    </div>
    
    <div className='fld-skolen-tilmelding'>
      <form action="/action_page.php">
        <div class="tilmeld">
          <select>
            <option value="fjernvarme1">Fjernvarme AVC - del 1</option>
            <option value="fjernvarme2">Fjernvarme AVC - del 2</option>
            <option value="korrosion">Korrosion</option>
          </select>
        </div>

        <div class="tilmeld"><input type="number" placeholder="Medarbejder nummer:"></input></div>
        <div class="tilmeld"><input type="text" placeholder="Afdeling:"></input></div>
        <div class="tilmeld"> 
          <select>
            <option value="kurt">Kurt</option>
            <option value="børge">Børge</option>
            <option value="bob">Bob</option>
          </select>
        </div>
        <input type="submit" value="Send"></input>
      </form>
    </div>

    </div>

  );
}

export default FLDSkolen;
