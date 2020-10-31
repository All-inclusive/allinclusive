import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import { Col, Container, Row } from "react-bootstrap";
import ChatBox from "./ChatBox.jsx";
import EventList from "./EventsList.jsx";
import axios from "axios";

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: [],
    };
  }

  render() {
    console.log("events in render", this.state.eventsArray);
    return (
      <div>
        <Container fluid>
          <div className='row2'>
          <Row>
            <Col>
              <SideNav user={this.props.user} />
              <ChatBox />
            </Col>
            <Col>
              
            </Col>
            <Col xs={6}>
              <EventList />;
            </Col>
            
          </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Client;
