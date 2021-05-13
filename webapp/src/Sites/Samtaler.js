import React from 'react'



import './Samtaler.css'


function Samtaler() {
  return (
    <div className='samtaler_Grid '>

      <div id="kontacter" classname="Samtaler_kontakter">

        <p>cookie </p>

      </div>

      <div className='Samtaler_Chat'>
      
      <h3>Kontacter</h3>
        <ul>
          <li>Simone</li><li>James</li><li>Oliver</li><li>Sofie</li>
        </ul>

        <h3>Nye chats</h3>
        <ul>
          <li>Simone</li><li>James</li>
        </ul>

      </div>
    </div>




  );
}

export default Samtaler;
