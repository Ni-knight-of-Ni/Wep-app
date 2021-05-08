import React, {useState, useEffect} from 'react'
import {Link}  from 'react-router-dom'






function Navi() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true)
      }
    };



  return (
    <nav className='navbar'>


      <ul>

        <li className='nav-item'>

            Home

        </li>

        <li className='nav-item'>

            Kalender

        </li>

        <li className='nav-item'>

            Samtaler

        </li>

        <li className='nav-item'>

            FLD Skolen

        </li>

        <li className='nav-item'>

            Filer

        </li>

        <div className='navbar-container'>
        
        </div>


        <div className='navbar-container'>

        </div>

      </ul>
    </nav>

  );
}

export default Navi;
