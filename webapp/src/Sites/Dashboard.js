import React from 'react'

import Nyhder from './Components/Dashboard_Nyheder'
import Kalender from './Components/Dashboard_Kalender'




function Dashboard() {
  return (
    <div className="dashboard_Grid">
    <Nyhder/>
    <Kalender/>
    </div>


  );
}

export default Dashboard;
