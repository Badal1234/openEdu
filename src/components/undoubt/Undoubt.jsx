import React,{useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap";
import { Switch , Route } from 'react-router-dom';
import Chat from './chat.js';

const Undoubt = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [chat, set_chat] = useState(false)
console.log(props)
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        set_chat(true)
      });
    }else{

      
    }
  }, [isLoading]);
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const handleClick = () => setLoading(true);
  if(chat){
    return (
      <Chat />
    )
  }
  return (
    <div >
      
      <div className="question">
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Type Your Question</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Class</Form.Label>
    <Form.Control as="select">
      <option>1 - 5</option>
      <option>6 - 10</option>
      <option>11 - 12</option>
      <option>Jee and Medical</option>
      <option></option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Class</Form.Label>
    <Form.Control as="select">
      <option>physics</option>
      <option>Chemistry</option>
      <option>CSE</option>
      <option></option>
      <option></option>
    </Form.Control>
  </Form.Group>
      </div>
      <div style={{marginLeft:'50vh'}}>
      <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Connecting to a Teacher…' : 'Click to Connect'}
    </Button>
      </div>

    </div>
  );
};

export default Undoubt;
