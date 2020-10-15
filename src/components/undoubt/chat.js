import React from 'react'
import {Form, Card, Row, CardColumns} from 'react-bootstrap'

const Chat = () => {
    const chat = [{text:'hii',sender:1},{text:'hii',sender:1},{text:'hii',sender:1}]
    return(
        <div>
            <div style={{height:'70vh',overflowY:'scroll',marginTop:20}}>
                {chat.map((item,index)=>{
                    return(
                        
                        <div style={{float:item.sender === 1 ? 'left': 'right'}}>
        <Card style={{width:'39vh',marginTop:100 * index,}}>
          <Card.Body >
              <Card.Text>
                  uuuu
        
              </Card.Text>
          </Card.Body>
        </Card>
        
                        </div>

                    )
                })}

            </div>
              <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
        </div>
    )
}

export default Chat