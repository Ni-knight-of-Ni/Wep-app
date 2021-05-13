import React, {useState, useEffect} from 'react'

import Calender from 'react-calendar'

import './Kalender.css'





function Kalender() {

  const [date, setDate] = useState(new Date());

 const onChange = () => {
   setDate(date);
 }

  return (
    <div className="kalender_Grid">

    <Calender onChange={onChange} value={date} />


    </div>


  );
}

export default Kalender;
