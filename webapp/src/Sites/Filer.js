import React from 'react'


//import af linking for react router her til kan vi link til yderliger sider her inde
import {Link}  from 'react-router-dom'

//loader billder ind og giver dem et variable navn så vi nemt kan bruge det igennem siden.
import Bispeparken from './Components/Images/Bispeparken-400x200.png'
import Håndbog from './Components/Images/handbook-400x200.png'
import Melstedhusene from './Components/Images/melstedhusene-400x400.jpg'
import Filer_element from './Components/Filer_Element'
import Filer_element2 from './Components/Filer_element2'

import './Filer.css'




function Filer() {

  // siden er sat ved at havde en general grid area for contentet og inde i det kan vi juster vores content.
  //alle projecter at lavet så de vær er inde i sing container og her efter angiver vi dem en lokalition i griddet-- dette skal laves om senere..

  return (
    <div className='filer_Grid '>
        <div class="Filer_scroll">
          <h2 className='Container_Title' >Filer</h2>
          <div className='Container_Elements'>
            <Filer_element/>
          </div>
          <div className='Container_Elements'>
            <Filer_element2/>
          </div>

        </div>
      
    </div>




  );
}

export default Filer;
