import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import { Col, Container, Row } from "react-bootstrap";
import ChatBox from "./ChatBox.jsx";
import EventsList from "./EventsList.jsx";




class Company extends Component  {
    render(){
      console.log("events in render", this.state.eventsArray);
      return (
        <div>
          <Container fluid>
            <div className='row2'>
            <Row>
              <Col>
                <SideNav company={this.props.company} />
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
export default Company;

