import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//components
import NavBar from "../navbar/NavBar";
import Menu from "../menu/Menu";
import Home from "../home/Home";
import Notification from "../notification/Notification";
import Downloads from "../downloads/Downloads";
import Aboutus from "../aboutus/AboutUs";

const Dashboard = () => {
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <Container fluid>
        <Row>
          <Col xs={1}>
            <Menu />
          </Col>
          <Col xs={11}>
            <section className="boundss">
              <Switch>
                <Route exact path="/dashboard/" component={Home} />
                <Route
                  path="/dashboard/notification"
                  component={Notification}
                />
                <Route path="/dashboard/downloads" component={Downloads} />
                <Route path="/dashboard/aboutus" component={Aboutus} />
              </Switch>
            </section>
          </Col>
        </Row>
      </Container>

      {/* <section className="ml-5">
        
      </section> */}
    </>
  );
};

export default Dashboard;
