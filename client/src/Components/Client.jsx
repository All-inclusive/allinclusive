import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import { Col, Container, Row } from "react-bootstrap";

class Client extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container fluid>
            <Row>
              <Col>
                <SideNav/>
              </Col>
              <Col xs={6} style={{overflowY: "scroll"}}>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>

      </div>
    );
  }
}

export default Client;
