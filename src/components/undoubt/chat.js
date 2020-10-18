import React,{useState} from 'react'
import {Form, Button,Row} from 'react-bootstrap'
import { ChatFeed, Message } from 'react-chat-ui'
const Chat = () => {
    const [messages, set_message] = useState([
        new Message({
          id: 1,
          message: "I'm the recipient! (The person you're talking to)",
        }), // Gray bubble
        new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
      ])
      const [text, set_text] = useState('')
    
    return(
        <div className="chat">
            <div style={{height:'70vh'}}>
            <ChatFeed
      messages={messages} // Array: list of message objects
      isTyping={true} // Boolean: is the recipient typing
      hasInputField={false} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
      // JSON: Custom bubble styles
      bubbleStyles={
        {
          text: {
            fontSize: 12
          },
          chatbubble: {
            borderRadius: 10,
            padding: 10
          }
        }
      }
    />

            </div>
                <div >
                <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" onChange={e => set_text(e.target.value)} />
  </Form.Group>
  <Button variant="primary" onClick={()=>set_message([...messages,{id:1,message:text}])}>Send</Button>
                    </div>        
           

        </div>
    )
}

export default Chat