//import af react
import React from 'react'

//import af bileder og anginivng af navn til bruge i functioner
import Bispeparken from './Components/Images/Bispeparken-400x400.jpg'
import Håndbog from './Components/Images/Nymindegaard-400x400.jpg'
import Melstedhusene from './Components/Images/melstedhusene-400x400.jpg'

//import af css
import './Filer.css'




function Filer() {

  //ikke meget kørende her.. bare basis ting for at se det virkede med linking lige nu
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
