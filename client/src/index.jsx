import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import BecomeASeller from "./Components/BecomeASeller.jsx";
import Company from "./Components/Company.jsx";
import JobOpp from "./Components/JobOpp.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import SideNav from "./Components/SideNav.jsx";

import "./style.css";
import Client from "./Components/Client.jsx";
import { Col, Container, Row } from "react-bootstrap";
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Container fluid>
            <Row>
              <Col>
                <SideNav />
              </Col>
              <Col xs={6} style={{overflowY: "scroll"}}>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
