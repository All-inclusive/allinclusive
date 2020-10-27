import React, { Component } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";

class SignUpMyAccount extends Component {
    constructor(props){
        super(props)
        this.state={
            client:true,
            company:true,
            showClientSignUp : false,
            showCompanySignUp: false
        }
    }

    clicked(){
        this.setState({
            client:false,
            company:false,
            showClientSignUp : true,
            showCompanySignUp : false
     
        })
     }
     clicked2(){
        this.setState({
            client:false,
            company:false,
            showClientSignUp : false,
            showCompanySignUp : true
     
        })
     }

  render() {
    var sectionStyle = {
      width: "100%",
      height: "700px",
      backgroundImage:
        "url(" +
        "https://cdn.pixabay.com/photo/2018/05/20/11/40/flower-3415551_960_720.jpg" +
        ")",
    };
    
    return (
      <div>
        <Container fluid>
          <Row>
          { this.state.showClientSignUp &&
            <Col id="clientSignUp" style={sectionStyle}>
              <br></br>
              <br></br>
              <br></br>
              <h1>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-emoji-sunglasses"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM6.5 6.497V6.5h-1c0-.568.447-.947.862-1.154C6.807 5.123 7.387 5 8 5s1.193.123 1.638.346c.415.207.862.586.862 1.154h-1v-.003l-.003-.01a.213.213 0 0 0-.036-.053.86.86 0 0 0-.27-.194C8.91 6.1 8.49 6 8 6c-.491 0-.912.1-1.19.24a.86.86 0 0 0-.271.194.213.213 0 0 0-.036.054l-.003.01z"
                  />
                  <path d="M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM9 5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-2-2V5z" />
                </svg>
                Client
              </h1>
              <Form>
                <Form.Row>
                  <Form.Label>First name</Form.Label>
                  <Form.Control name="firstName" placeholder="First name" />

                  <Form.Label>Last name</Form.Label>
                  <Form.Control name="lastName" placeholder="Last name" />
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
              <br></br>
              <center>
                <button type="button" class="btn btn-outline-info">
                  Submit
                </button>
              </center>
              <br></br>
              <br></br>
              <br></br>
            </Col>
  }
            { this.state.showCompanySignUp &&
            <Col id="companySignUp" style={sectionStyle}>
              <br></br>
              <br></br>
              <br></br>
              <h1>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-emoji-laughing"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"
                  />
                  <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
                Company
              </h1>
              <Form.Label>Company name</Form.Label>
              <Form.Control name="companyName" placeholder="company name " />

              <Form.Label>Email</Form.Label>
              <Form.Control name="email" placeholder="Enter email" />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />

              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phoneNumber"
                placeholder="Enter your phone number"
              />

              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />

              <Form.Label>Image URL</Form.Label>
              <Form.Control name="url" placeholder="Enter your image URL" />
              <br></br>
              <center>
              <button type="button" class="btn btn-outline-info">
                Submit
              </button>
              </center>
              <br></br>
              <br></br>
              <br></br>
            </Col>
  }
          </Row>
          <Row> 
          { this.state.client &&
              <Col id='client'>
                  
              <h1> Client experience </h1>
              <p>As a client while using our application you will have the chance to create an account in order <br></br>
              to see our EVENTS SERVICES and you will have fun !!!!! <br></br>
              <br></br>
              <h5>Click on the smiley to create your account </h5>
              <br></br>
              <Image src="https://webstockreview.net/images/clipart-smile-smile-gif-6.gif" rounded style={{width:'100px',height:'100px'}}  onClick={()=>this.clicked()} />
              </p>
 
              </Col>
  }
             { this.state.company &&
              <Col id='company'>
              <h1> Company  experience </h1>
              <p>As a company while using our application you will have the chance to create an account in order <br></br>
              to post your EVENTS  with all details  <br></br>
              <br></br>
              <h5>Time to create your account  </h5>
              <br></br>
              <Image src="https://webstockreview.net/images/clipart-smile-smile-gif-6.gif" rounded style={{width:'100px',height:'100px'}} onClick={()=>this.clicked2()} />
              </p>
              </Col>
  }
          </Row>
        </Container>
      </div>
    );
  }
}
export default SignUpMyAccount;
