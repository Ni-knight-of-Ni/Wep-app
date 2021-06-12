
//import af react
import React from 'react'

//import af linking for react router her til kan vi link til yderliger sider her inde
import {Link}  from 'react-router-dom'


//import of css
import './Fjernvarme1.css'


function Fjernvarme1() {


  return (
    <div className='Fjernvarme1_Grid '>
<div class="Fjernvarme1_scroll">
  <h3 class="white">Fjernvarme AVC - del 1</h3>
  <div class="box">
    <div class="column">
      <h3>Beskrivelse</h3>
      <br></br>
      <p>Kurset giver deltagerne en grundig indsigt i fjernvarmens opbygning, installationer og funktioner. Deltagerne kan efter kurset navigere i direkte og indirekte anlæg. Ligesom de har fået forståelse for vigtiheden af god afkøling og kan således rådgive herom.</p>
      <br></br>
      <p>Endvidere lærer deltagerne om håndtering af enheder som varmeveksler, varmtvandsbeholdelse og fejlfinding herpå. Kurset giver også en introduktion til Danfoss radiatorventiler og ECL varmestyring samt indregulering og indstilling af Grundfos pumper.</p>
    </div>
    <div class="column1">
      <h3>Praktisk information</h3>
      <br></br>
      <p class="bold">Målgruppe</p>
      <p>VVS-montører</p>
      <p>VVS-lærlinge</p>
      <br></br>
      <p class="bold">Niveau</p>
      <p>Grundlæggende</p>
      <br></br>
      <p class="bold">Varighed</p>
      <p>7 timer inkl. frokost</p>
      <br></br>
      <p class="bold">Tid og sted</p>
      <p>Nærmere info følger</p>
      <br></br>
      <p class="bold">Kursusform</p>
      <p>Der er både teoretiske og praktiske opgaver</p>
      <br></br>
      <p class="bold">Underviser</p>
      <p>Bob FLD</p>
      <p>(evt. i samarbejde med konsulent fra Danfoss og Grundfos)</p>
    </div>
  </div>
</div>
    
    </div>

  );
}

export default Fjernvarme1;
