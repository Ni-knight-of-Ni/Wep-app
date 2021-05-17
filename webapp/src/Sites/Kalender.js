import React, {useState} from 'react'

import Calender from 'react-calendar'



import './Kalender.css'





function Kalender() {

const [date, onChange] = useState(new Date());

  return (
    <div className="kalender_Grid">

      <div className='Cal_picker'>
        <Calender showWeekNumbers onChange={onChange} value={date} />
      </div>


      <div className='Cal_favInfo '>
        <div className='farveKoder'>
          <h2>Farvekoder</h2>
        </div>
        <div className='farveIndikationer'>
         <ul>
          <li>
          Blå
          </li>
          <li>
          gul
          </li>
          <li>
          lilla
          </li>
          <li>
          rød
          </li>
         </ul>
        </div>
      </div>

      <div className='Cal_info'>
        {date.toString()}
        <section className=' infoSection'>
        <li>8 -</li><li>--</li><li>10-</li><li>--</li><li>12-</li>
        <li>--</li><li>14-</li><li>--</li><li>16-</li><li>--</li><li>18-</li>
        <li>--</li><li>20-</li><li>--</li><li>22-</li><li>--</li><li>24-</li>
        </section>
      </div>


    </div>


  );
}

export default Kalender;

//kilde
//https://www.npmjs.com/package/react-calendar
