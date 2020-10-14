import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";

const Landing = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="landing_home">
        {/* <Container>
          <Row>
            <Col className="mt-5 logo">OpenNote</Col>
            <Col className="mt-5 text-right">
              <Button className="login" onClick={() => setModalShow(true)}>
                Login
              </Button>
            </Col>
          </Row>
        </Container> */}
        {/* <h1 className="landing_home_heading mt-5 pt-5">
          Discover better way to study <br /> any time any where
        </h1> */}
      </div>
      <h1>Landing page</h1>
      <Link to="/dashboard" className="btn btn-dark">
        Go to Dahsboard
      </Link>

      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Landing;
