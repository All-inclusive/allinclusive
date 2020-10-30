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
  componentDidMount() {
    const options = {
      method: "get",
      url: "/api/event",
    };
    axios(options)
      .then((response) => {
        console.log("response", response);
        this.setState({
          eventsArray: response.data,
        });
        console.log("events in axios", this.state.eventsArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log("events in render", this.state.eventsArray);
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <SideNav user={this.props.user} />
            </Col>
            <Col xs={6}>
              <EventList eventsArray={this.state.eventsArray} />;
            </Col>
            {/* <Col>
              <ChatBox />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Client;
