// import af react
import React from 'react'
import {Link}  from 'react-router-dom'
//css import
//import
import Bispeparken_100 from './Images/Bispeparken-400x100.png'
function Favorit() {

    //script til at hente data fra en api ?
  return (

    <div className='Favo_Layout'>
      <div className='Favo_container'>
        <h1 className='favColor'>Farvoriter</h1>
        <section className='Favo_Favs_Container'>
          <ul className='Favo_Favs'>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100 } alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Bispeparken</h2>
              </Link>
            </div>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100} alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Bispeparken</h2>
              </Link>
            </div>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100} alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Håndbog</h2>
              </Link>
            </div>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100} alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Bispeparken</h2>
              </Link>
            </div>
          </ul>
        </section>

        <section className='Favo_Res_Container'>
          <ul className='Favo_Res'>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100} alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Bispeparken</h2>
              </Link>
            </div>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100} alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Bispeparken</h2>
              </Link>
            </div>

            <div className=' Link_Styling'>
              <img src={Bispeparken_100} alt='' className='dashFavImg' ></img>
              <Link to='./Fliler_Bispeparken' className=''>
              <h2 className='Filer_Title' >Bispeparken</h2>
              </Link>
            </div>

          </ul>
        </section>
      </div>

    </div>


  );
}

export default Favorit;
