import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

class SignUpMyAccount extends Component {
  render() {
    return (        
      <div >
         
        <Container fluid  >
            
          <Row>
              
            <Col>
              <br></br>
              <br></br>
              <br></br>
              <h1>Client</h1>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Label>first name</Form.Label>
                    <Form.Control name="firstName" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control name="lastName" placeholder="Last name" />
                  </Col>
                </Form.Row>
              </Form>

              <Form.Label>Email</Form.Label>
              <Form.Control name="email" placeholder="Enter email" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
              <Form.Label>Image URL</Form.Label>
              <Form.Control name="url" placeholder="Enter your image URL" />
              <Form.Check
                type="checkbox"
                className="my-1 mr-sm-2"
                id="customControlInline"
                label="Special needed"
                custom
                // onSelect for getting the value
              />
              <button type="button" class="btn btn-outline-info">
                Submit
              </button>
            </Col>
           </Row>

            <Row>
            <Col>
              <Col>
                <br></br>
                <br></br>
                <br></br>
                <h1>Company</h1>
                <Form.Label>Company name</Form.Label>
                <Form.Control name="companyName" placeholder="company name " />
              </Col>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter email" />
              </Col>
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />

                
              </Col>
              <Col>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                />
              </Col>
              <Col>
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Col>
              <Col>
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="url" placeholder="Enter your image URL" />
              </Col>
              <Col>
              <button type="button" class="btn btn-outline-info">
                Submit
              </button>
              </Col>
            </Col>
            
          </Row>
        </Container>
        
      </div>
      
    );
  }
}
export default SignUpMyAccount;
