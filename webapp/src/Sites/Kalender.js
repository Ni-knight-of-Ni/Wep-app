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
        <div>
          <p>dummy text</p>
        </div>
      </div>

      <div className='Cal_info'>
        {date.toString()}
      </div>


    </div>


  );
}

export default Kalender;

//kilde
//https://www.npmjs.com/package/react-calendar
