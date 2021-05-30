
//import af react og beste kompunenter så vi kan lave usestates til mobil nav
import React, {useState, useEffect} from 'react'

//import af linking fra react router så vi kan skifte sider
import {Link}  from 'react-router-dom'
//iumport af css
import './Navi.css'


function Navi() {

// anlægning af vores mobil menu til at kunne fungere
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)





// click ? ændre mellem active nav menu active og nav menu .. til mobil version
//links til at kunne ændre url så router,switch kan render den nye side

  return (

    <div>
      <nav className={click ? 'navbar-active navbar_Grid' : 'navbar navbar_Grid'}>

        <ul className='nav-menu' >
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-home"></i> Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='./Kalender' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-compass"></i> Kalender
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='./Samtaler' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-user-friends"></i> Samtaler
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='./FLDSkolen' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-newspaper"></i> FLD Skolen
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='./Filer' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-folder-open"></i> Filer
            </Link>
          </li>

          <div className='navbar-container'>
          </div>
          <div className='navbar-container'>
          </div>
        </ul>
      </nav>
      <div className='menu-icon' onClick={handleClick} >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>


    </div>


  );
}

export default Navi;
