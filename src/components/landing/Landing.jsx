import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Login from "./components/Login";

const Landing = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <h1>Landing page</h1>
      <Link to="/dashboard" className="btn btn-dark">
        Go to Dahsboard
      </Link>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        Login
      </Button>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Landing;
