// import af react
import React from 'react'

// import af bootstrap hvor vi kun tager Table functionen der inde.

import { Table } from 'react-bootstrap';

//import af css
import './bootstrap.css';
import './Dashboard.css'


//image import
import Bispeparken from './Components/Images/Bispeparken-400x400.jpg'

import Favorit from './Components/Farvoriter.js'
import Nyheder from './Components/Dashboard_nyheder.js'


function Dashboard() {

  //intilvidre har vi opdel sidne i 2 rows, en til kalender en til nyheder, dette skal ses igennem da nyt data fra tests er kommet ind
  //table skal sættes ind i nyt document så det er nemmer overskuligt her inde, lige så med nyheder og så lave functioner der kan hente data og imput det ind.

  return (
    <div className="dashboard_Grid">


      <div className='Dashbord_Nyheder'>
        <div className='Dashboard_Nyhed_img_container'>
          <img src={Bispeparken} alt='' className='Dashbord_Nyhed_Img' ></img>
        </div>
        <div className='Dashbord_Nyhed_Info'>
          <h1 className='Dashbord_Nyhed_Title'>Ny personale gode</h1>
          <p className='Dashbord_Nyhed_Text'>Vi har fået et nyt samarbejde med Claires.dk. Claire har et værktøj der kan hjælpe med at holde styr på ens økonomi, så i har muligheden for at kunne teste det af, og se hvad i synes. </p>
        </div>
      </div>

      <div className='Dashbord_kalender'>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Mandag</th>
            <th>Tirsdag</th>
            <th>Onsdag</th>
            <th>Torsdag</th>
            <th>Fredag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>12</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>14</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>16</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      </div>

      <Favorit/>


  </div>

  );
}

export default Dashboard;
