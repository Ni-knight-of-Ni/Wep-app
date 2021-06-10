
//import af react
import React from 'react'

//import af linking for react router her til kan vi link til yderliger sider her inde
import {Link}  from 'react-router-dom'

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
        <div class="scroller">
          <ul>
            <li>
          <button type="button" class="buttons"> <Link to='./Fjernvarme1'>Fjernvarme AVC - del 1
            </Link> </button>
          </li>
          <li>
          <button type="button" class="buttons"> Fjernvarme ABC - del 2 </button>
          </li>
          <li>
          <button type="button" class="buttons"> BOSCH varmepumper </button>
          </li>
          <li>
          <button type="button" class="buttons"> Gastech varmepumper </button>
          </li>
          <li>
          <button type="button" class="buttons"> Korrosion </button>
          </li>
          <li>
          <button type="button" class="buttons"> Fugning </button>
          </li>
          <li>
          <button type="button" class="buttons"> Gulvvarme </button>
          </li>
          <li>
          <button type="button" class="buttons"> Viega - Rør og fittings til opbygning af brugsvandinstallationer </button>
          </li>
          <li>
          <button type="button" class="buttons"> Geberit - Rør og fittings til opbygning af brugsvandinstallationer </button>
          </li>
          <li>
          <button type="button" class="buttons"> GROHE armaturer </button>
          </li>
          <li>
          <button type="button" class="buttons"> Geberit/Ifö toiletter og cisterner </button>
          </li>
          <li>
          <button type="button" class="buttons"> FM Mattsson/Damixa/Mora armaturer </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
          </li>
          <li>
          <button type="button" class="buttons"> Arbejdes kontrakt </button>
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
            <option value="boschvarme">BOSCH varmepumper</option>
            <option value="gastechvarme">Gastech varmepumper</option>
            <option value="korrosion">Korrosion</option>
            <option value="fugning">Fugning</option>
            <option value="Gulvvarme">Gulvvarme</option>
            <option value="Viegaroer">Viega - Rør og fittings til opbygning af brugsvandinstallationer </option>
            <option value="geberitroer">Geberit - Rør og fittings til opbygning af brugsvandinstallationer</option>
            <option value="grohearmatur">GROHE armaturer</option>
            <option value="geberitifo">Geberit/Ifö toiletter og cisterner</option>
            <option value="fmmattssondamixamora">FM Mattsson/Damixa/Mora armaturer</option>
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

        <input type="submit" value="Send blanket" class="skrift"></input>
      </form>
    </div>
    </div>



  );
}

export default FLDSkolen;
