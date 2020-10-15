import React from "react";
import { Link } from "react-router-dom";
import { Container, Carousel, Row, Col , Button} from "react-bootstrap";
import Login from "./components/Login";
import Footer from '../footer/Footer';
//images
import why1 from '../../images/why1.png';
import why2 from '../../images/why2.png';
import why3 from '../../images/why3.png';
import why4 from '../../images/why4.png';


const Landing = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
    <Link to="/dashboard" className="btn btn-dark">
        Go to Dahsboard
      </Link>
      <div className="landing_home">
        <Container>
          <Row>
            <Col className="mt-5  ">
              <p className="logo_landing"> OpenNote </p>
            </Col>
            <Col className="mt-5 text-right">
              <Button className="login" onClick={() => setModalShow(true)}>
                Login
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 pt-5">
          <h1 className="landing_home_heading  pt-4 pb-4 pl-1 pr-1 ">
            Discover better way to study <br /> any time any where
          </h1>
        </Container>
      </div>
      <Container className="mt-5">
        <div className="text-center">
          <h1 className="landing_heading pb-3 font-weight-bold">OpenNote</h1>
          <p className="mt-4  font-weight-bold ">
            Achieve your aspirational career goals by skilling, up-skliing and
            re-skilling the required skills you need
          </p>
          <p className="details">
            With the legacy of OpenNote, OpenNote offers study materials,
            courses for individuals to realize their dream career. The domain
            experts of OpenNote from over every sectors including IAS , UPSC ,
            banking, technology, structured the course curriculum based on
            industry demands.
          </p>
        </div>
      </Container>
      <div className="mt-5 b-5 whyon">
        <Container>
          <h1 className="pt-3 text-center font-weight-bold pb-3">
            Why OpenNote
          </h1>
          <Row>
            <Col>
              <img src={why1} />
              <p>Industry Approved Course Curriculum</p>
            </Col>
            <Col>
              <img src={why2} />
              <p>Experienced And Qualified Faculties</p>
            </Col>
            <Col>
              <img src={why3} />
              <p>Hybrid Learning Through Theory And Practical Sessions</p>
            </Col>
            <Col>
              <img src={why4} />
              <p>Job Placement And Entrepreneurship Support Program</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-5 testimonial pb-4">
        <h1 className="pt-3  text-center">Testimonial</h1>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img
                    src="https://avatars3.githubusercontent.com/u/59647069?s=460&u=6cfd64a5a9b8f60a214e4f7617e0c6a52ddb2bc6&v=4"
                    className="testimonial_img"
                  />
                </Col>
                <Col className=" m-auto ">
                  <h3>Chinmay Ranjan Sahoo</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img
                    src="https://avatars0.githubusercontent.com/u/40519302?s=460&v=4"
                    className="testimonial_img"
                  />
                </Col>
                <Col className=" m-auto ">
                  <h3>Binod Thapa</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img
                    src="https://avatars3.githubusercontent.com/u/59647069?s=460&u=6cfd64a5a9b8f60a214e4f7617e0c6a52ddb2bc6&v=4"
                    className="testimonial_img"
                  />
                </Col>
                <Col className=" m-auto ">
                  <h3>Smruti Sourav Nanda</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>

      
      <Footer />
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Landing;
