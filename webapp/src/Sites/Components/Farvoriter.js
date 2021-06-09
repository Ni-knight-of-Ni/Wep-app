// import af react
import React from 'react'
import {Link}  from 'react-router-dom'
//css import
//import
import Bispeparken from './Images/Bispeparken-400x400.jpg'
function Favorit() {

    //script til at hente data fra en api ?



  return (

    <div className='Favo_Layout'>
      <div className='Favo_container'>
        <h1>Farvoriter</h1>
        <section className='Favo_Favs_Container'>
          <ul className='Favo_Favs'>
          <div className='Filer_projecter1 projecter_Styling'>
            <img src={Bispeparken} alt='' className='FilerImages' ></img>
            <Link to='./Fliler_Bispeparken' className=''>
            <h2 className='Filer_Title' >Bispeparken</h2>
            </Link>
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
        </section>

        <section className='Favo_Res_Container'>
          <ul className='Favo_Res'>
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
        </section>
      </div>

    </div>


  );
}

export default Favorit;
