import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import { Col, Container, Row } from "react-bootstrap";
import ChatBox from './ChatBox.jsx'

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
                <SideNav user ={this.props.user}/>
              </Col>
              <Col xs={6} >2 of 3</Col>
              <Col>
              <ChatBox/>
              </Col>
            </Row>
          </Container>

      </div>
    );
  }
}

export default Client;
