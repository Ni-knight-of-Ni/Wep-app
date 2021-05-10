import React, {useState, useEffect} from 'react'
import {Link}  from 'react-router-dom'
import './Navi.css'


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


// click ? ændre mellem active nav menu active og nav menu .. til mobil version
  return (
    <nav className='navbar navbar_Grid'>
      <ul className={click ? 'nav-menu active' : 'nav-menu'} >
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='./Kalender' className='nav-links' onClick={closeMobileMenu}>
            Kalender
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='./Samtaler' className='nav-links' onClick={closeMobileMenu}>
            Samtaler
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='./FLDSkolen' className='nav-links' onClick={closeMobileMenu}>
            FLD Skolen
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='./Filer' className='nav-links' onClick={closeMobileMenu}>
            Filer
          </Link>
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
