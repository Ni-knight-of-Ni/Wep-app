
// import af react
import React from 'react'

import Bispeparken from './Images/Bispeparken-400x400.jpg'


//import 'bootstrap/dist/css/bootstrap.min.css';
//css import
//import
//import { Carousel } from 'react-bootstrap';
import {Card } from 'react-bootstrap'

function Filer_element() {

    //script til at hente data fra en api ?



  return (
<div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Bispeparken} />
      <Card.Body>
        <Card.Title className=' '>Card Title</Card.Title>

      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Bispeparken} />
      <Card.Body>
        <Card.Title className=' '>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

</div>



  );
}

export default Filer_element;
