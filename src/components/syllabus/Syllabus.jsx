import React from "react";
import {Container,Card,Row} from 'react-bootstrap'


const Syllabus = () => {
  const data = [
    {color:'primary' , text:'class 1 to 5'},
     {color:'secondary', text:'class 6 to 10'},
     {color:'success',text:'class 11 and class 12'},
     {color:'Danger',text:'B.tech and B.E'},
     {color:'Warning', text:'Bsc and Bs'},
     {color:'Info',text:'PG Courses'},
     {color:'Light',text:'JEE and MEdical'},
     {color:'Dark', text:'GMAT and CAT'}
]
  return (
    <Container className="mt-5">
    <h1 className="bold">Syllabus</h1>
      <Row>
      {   data.map((variant, idx) => (
        <Card
          bg={variant.color.toLowerCase()}
          key={idx}
          text={variant.color.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', marginLeft:'10vh' }}
          className="mb-2"
        >
          
          <Card.Body>
            <Card.Title>{variant.text}  </Card.Title>
            <Card.Text>
              Syllabus
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </Container>
  );
};

export default Syllabus;
