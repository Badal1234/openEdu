import React from "react";
import {Container,Row,Col , Image} from 'react-bootstrap';

const Myid = () => {
  return (
    <div className="myid mt-5 ml-5 ">
    <Container>
        <Row>
          <Col xs={6} md={4}>
               <Image src="" roundedCircle />
           </Col>
        </Row>
    </Container>
     <div>
       <p>Name : Chinmay Ranjan Sahoo</p>
     </div>
    </div>
  );
};

export default Myid;
