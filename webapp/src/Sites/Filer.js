import React from 'react'


//import af linking for react router her til kan vi link til yderliger sider her inde
import {Link}  from 'react-router-dom'

//loader billder ind og giver dem et variable navn så vi nemt kan bruge det igennem siden.
import Bispeparken from './Components/Images/Bispeparken-400x400.jpg'
import Håndbog from './Components/Images/Nymindegaard-400x400.jpg'
import Melstedhusene from './Components/Images/melstedhusene-400x400.jpg'

import Filer_element from './Components/Filer_Element'


import './Filer.css'




function Filer() {

  // siden er sat ved at havde en general grid area for contentet og inde i det kan vi juster vores content.
  //alle projecter at lavet så de vær er inde i sing container og her efter angiver vi dem en lokalition i griddet-- dette skal laves om senere..

  return (
    <div className='filer_Grid '>

    <div className='Filer_projecter'> </div>

      <div class="Filer_scroll">
        <h2>Filer</h2>
          <div className='Filer_projecter1 projecter_Styling'>
            <img src={Bispeparken} alt='' className='FilerImages' ></img>
            <Link to='./Fliler_Bispeparken' className=''>
            <h2 className='Filer_Title' >Bispeparken</h2>
            </Link>
          </div>

          <div className='Filer_projecter2 projecter_Styling'>
            <img src={Håndbog} alt='' className='FilerImages'></img>
            <h2 className='Filer_Title' >Håndbog</h2>
          </div>

          <div className='Filer_projecter3 projecter_Styling'>
            <img src={Melstedhusene} alt='' className='FilerImages'></img>
            <h2 className='Filer_Title' >Melstedhusene</h2>
          </div>

          <div className='Filer_projecter4 projecter_Styling'>
            <img src={Bispeparken} alt=''  className='FilerImages'></img>
            <h2 className='Filer_Title'>Bispeparken</h2>
          </div>

          <div className='Filer_projecter5 projecter_Styling'>
            <img src={Melstedhusene} alt=''  className='FilerImages'></img>
            <h2 className='Filer_Title'>Bispeparken</h2>
          </div>

      </div>


        <Filer_element/>
    </div>




  );
}

export default Filer;
