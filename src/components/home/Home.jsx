import React from 'react'
import {Container,Card,Row, CardGroup, Button} from 'react-bootstrap'
import {role} from '../../var'

const Home = (props) => {
  console.log(props)
  const body = () => {
    return (
      [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' , paddingLeft:'20vh'}}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))

    )

  }

 

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
    <Container className="home">
      <Row>
      {   data.map((variant, idx) => (
        <Card
          bg={variant.color.toLowerCase()}
          key={idx}
          text={variant.color.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', marginLeft:'10vh' }}
          className="mb-2"
        >
          
          <Card.Body onClick={()=>props.history.push('/dashboard/course')}>
            <Card.Title> Class and Exams </Card.Title>
            <Card.Text>
              {variant.text}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </Container>
    
  )
}


const TeacherHome = () => {
  return (
    <div style={{marginLeft:'5vh',marginTop:'10vh'}}>
      <div style={{marginBottom:'5vh'}}>
      <Button variant="primary" size="lg" block>
    Upload New Notes
    
  </Button>
      </div>
      <Row>
      <Card style={{ width: '18rem',marginLeft:'5vh' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',marginLeft:'5vh' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        
      </Row>
   

    </div>
  )
}

export default role === 'teacher' ? TeacherHome : Home