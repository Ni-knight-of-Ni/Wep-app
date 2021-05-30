
//import af react
import React from 'react'

//import af forms fra boostrap
import Form from 'react-bootstrap/Form'

//importer kompunent fra desse javascript
import FLDSkolen_kursuser from './Components/FLDSkolen_kursuser'
import FLDSkolen_blanket from './Components/FLDSkolen_blanket'

//import of css
import './FLDSkolen.css'


function FLDSkolen() {


  // opsat en unordered list med de forksellige kuruser som FLD kunne give

  // den importede Boostrap form hvor vi har bruget denne til at kunne opsætte en form til at kunne tilmelde sig et kurusus

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
      <form method="post" action="mailto:josephine1996@live.dk" enctype="text/plain">
        <h3>Tilmelding til kursus</h3>
        <div class="tilmeld"><input name="navn" type="text" placeholder="Navn:"></input></div>
        <div class="tilmeld"><input name="nummer" type="number" placeholder="Medarbejder nummer:"></input></div>

        <div class="tilmeld">
          <select name="kursus">
            <option value="fjernvarme1">Fjernvarme AVC - del 1</option>
            <option value="fjernvarme2">Fjernvarme AVC - del 2</option>
            <option value="korrosion">Korrosion</option>
          </select>
        </div>

        <div class="tilmeld"><input name="afdeling" type="text" placeholder="Afdeling:"></input></div>
        <div class="tilmeld">
          <select name="leder">
            <option value="kurt">Kurt</option>
            <option value="børge">Børge</option>
            <option value="bob">Bob</option>
          </select>
        </div>
        <div class="tilmeld"><input name="brugers_email" type="text" placeholder="Email"></input></div>

        <input type="submit" value="Send blanket"></input>
      </form>
    </div>
    </div>



  );
}

export default FLDSkolen;
