import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Headroom from "react-headroom";

//components
import NavBar from "../navbar/NavBar";
import Menu from "../menu/Menu";
import Home from "../home/Home";
import Notification from "../notification/Notification";
import Downloads from "../downloads/Downloads";
import Aboutus from "../aboutus/AboutUs";
import Video from "../video/Video";
import Undoubt from "../undoubt/Undoubt";
import Syllabus from "../syllabus/Syllabus";
import Myid from "../myid/Myid";
import Chat from '../undoubt/chat';

const Dashboard = () => {
  return (
    <>
      <Headroom>
        <NavBar />
      </Headroom>

      <Container fluid>
        <Row>
          <Col xs={1}>
            <Menu />
          </Col>
          <Col xs={11} className="mt-5">
              <Switch>
                <Route exact path="/dashboard/" component={Home} />
                <Route
                  path="/dashboard/notification"
                  component={Notification}
                />
                <Route path="/dashboard/downloads" component={Downloads} />
                <Route path="/dashboard/aboutus" component={Aboutus} />
                <Route path="/dashboard/videos" component={Video} />
                <Route path="/dashboard/undoubt" component={Undoubt} />
                <Route  path="/dashboard/undoubt/chat" component={Chat} />
                <Route path="/dashboard/syllabus" component={Syllabus} />
                <Route path="/dashboard/myid" component={Myid} />
              </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
