import React from 'react'
import { Table } from 'react-bootstrap';


import './bootstrap.css';

import './Dashboard.css'

//image import
import Bispeparken from './Components/Images/Bispeparken-400x400.jpg'


function Dashboard() {
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



    </div>


  );
}

export default Dashboard;
