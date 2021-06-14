
// import af react
import React from 'react'

import Bispeparken from './Images/Bispeparken-400x200.png'

import {Element_Navn} from './Element_Navn'


import {Card} from 'react-bootstrap'

function Filer_element() {

    //script til at hente data fra en api ?



  return (

    <>
    {Element_Navn.map((item, index) => {
      return(

        <Card className={item.divName} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.ImageName} />
            <Card.Body>
              <Card.Title className={item.cName}>{item.title}</Card.Title>
            </Card.Body>
        </Card>

      );
    })}
    </>
  );
}
export default Filer_element;
