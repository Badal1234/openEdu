import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [index, setIndex] = useState(0);
  const SignIn = () => {
    return (
      <div className="signin_body ">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary">Sign - In</Button>
        </Form>
      </div>
    );
  };
  const SignUp = () => {
    return (
      <div className="signup_body">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter Password" />
          </Form.Group>
          <Button variant="primary">Sign - Up</Button>
        </Form>
      </div>
    );
  };
  const routes = [
    { key: 1, route: SignIn() },
    { key: 2, route: SignUp() },
  ];
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="login">
          <div className="login_heading p-2 h3">
            <p
              onClick={() => setIndex(0)}
              className={index === 0 ? "actives" : "inactives"}
              className="pointer"
            >
              LogIn
            </p>

            <p
              onClick={() => setIndex(1)}
              className={index === 1 ? "actives" : "inactives"}
              className="pointer"
            >
              SignUp
            </p>
          </div>
          <div>{routes[index].route}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
