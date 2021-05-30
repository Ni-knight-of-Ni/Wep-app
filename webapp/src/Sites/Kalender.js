import React, {useState} from 'react'

import Calender from 'react-calendar'



import './Kalender.css'





function Kalender() {

const [date, onChange] = useState(new Date());

//Da react render alt inde i "return" kan vi ikke lægge kommentar der inde
//første div er basis gridet for Grid_content
// næste er container for vores kalender vi importer
//der efter har vi vores farve koder som vi har lavet om en liste i ul li og så anvændet awesomefont til at havde noget doter som indikations element
//sidste er vores informations upsætning for hvad der er på den givende dag. vi bruger en af kalenders data values og kan printe det ud på siden
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
          <li><i class="fas fa-circle icon-Blå " ></i>Blå</li>
          <li><i class="fas fa-circle icon-yellow"></i>gul</li>
          <li><i class="fas fa-circle icon-lilla"></i>lilla</li>
          <li><i class="fas fa-circle icon-red"></i>rød</li>
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
