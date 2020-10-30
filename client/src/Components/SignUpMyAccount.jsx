import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import axios from "axios";
import SignIn from "./SignIn.jsx";

class SignUpMyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: true,
      company: true,
      showClientSignUp: false,
      showCompanySignUp: false,
      showLogin: true,
      //sign up for client
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      specialNeed: false,
      imgUrl: "",
      //sign up for company
      name: "",
      emailCompany: "",
      passwordCompany: "",
      phoneNumberCompany: "",
      adress: "",
      imgUrlCompany: "",
    };
    this.RegisterClick = this.RegisterClick.bind(this);
    this.addClient = this.addClient.bind(this);
    this.handleChangeSignIn = this.handleChangeSignIn.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.submitClicked=this.submitClicked.bind(this)
  }

  handleChangeSignIn(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addClient(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      specialNeed: this.state.specialNeed,
      imgUrl: this.state.imgUrl,
    };
    axios.post("/api/user/add", newUser).then((result) => {
      console.log(result);
    });
  }
  addCompany(e) {
    e.preventDefault();
    const newCompany = {
      name: this.state.name,
      emailCompany: this.state.emailCompany,
      passwordCompany: this.state.passwordCompany,
      phoneNumberCompany: this.state.phoneNumberCompany,
      adress: this.state.adress,
      imgUrlCompany: this.state.imgUrlCompany,
    };
    console.log(newCompany);
    axios.post("/api/company/add", newCompany).then((result) => {
      console.log(result);
    });
  }

  clicked() {
    this.setState({
      client: false,
      company: false,
      showClientSignUp: true,
      showCompanySignUp: false,
      showLogin: false,
    });
  }
  clicked2() {
    this.setState({
      client: false,
      company: false,
      showClientSignUp: false,
      showCompanySignUp: true,
      showLogin: false,
    });
  }
  // the button submit for sign up section 
  submitClicked(){
    this.setState({
      showLogIn : true,
      showClientSignUp : false
    })
  }

  RegisterClick() {
    this.setState({
      showLogIn : false,
      
      client: true,
      company: true,
      showClientSignUp: false,
      showCompanySignUp: false,
      showLogin: false,
    });
  }

  render() {
    var sectionStyle = {
      fontSize: "30px",
      width: "100%",
      height: "900px",
      backgroundImage:
        "url(" +
        "https://www.ohspa.ca/wp-content/uploads/2015/07/signup-background.jpg" +
        ")",
    };

    return (
      <div>
        {this.state.showLogin ? (
          <SignIn RegisterClick={this.RegisterClick} />
        ) : (
          <div>
            <Row>
              {this.state.showClientSignUp && (

                <Container id="clientSignUp" style={sectionStyle}>
                  <h1 style={{ marginBottom: "50px", marginTop: "50px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-emoji-sunglasses"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                    <Form.Label style={{ fontSize: "30px" }}>
                       Client type
                      </Form.Label>
                      <Form.Control
                        name="type"
                        placeholder="passenger or company"
                        
                      />
                      <Form.Label style={{ fontSize: "30px" }}>
                        First name
                      </Form.Label>
                      <Form.Control
                        name="firstName"
                        placeholder="First name"
                        onChange={this.handleChangeSignIn}
                      />

                      <Form.Label style={{ fontSize: "30px" }}>
                        Last name
                      </Form.Label>
                      <Form.Control
                        name="lastName"
                        placeholder="Last name"
                        onChange={this.handleChangeSignIn}
                      />
                    </Form.Row>
                  </Form>

                  <Form.Label style={{ fontSize: "30px" }}>Email</Form.Label>
                  <Form.Control
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                  <Form.Label style={{ fontSize: "30px" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChangeSignIn}
                  />

                  <Form.Label style={{ fontSize: "30px" }}>
                    Phone number
                  </Form.Label>
                  <Form.Control
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    onChange={this.handleChangeSignIn}
                  />
                  <Form.Label style={{ fontSize: "30px" }}>
                    Image URL
                  </Form.Label>
                  <Form.Control
                    name="imgurl"
                    placeholder="Enter your image URL"
                    onChange={(e) => {
                      this.setState({ imgUrl: e.target.value });
                    }}
                  />
                  <Form.Check
                    type="checkbox"
                    className="my-1 mr-sm-2"
                    id="customControlInline"
                    label="Special needed"
                    custom
                    // onSelect for getting the value
                  />
                  <center>
                  <button button type="button" class="btn btn-primary btn-lg btn-block"
                    onClick={(e) => this.addClient(e),this.submitClicked}
                  >
                    Submit
                  </button>
                  </center>
                 
              
                </Container>
              )}
               {this.state.showLogIn && (
                    <SignIn/>
                  ) }
              {this.state.showCompanySignUp && (
                <Container id="companySignUp" style={sectionStyle}>
                  
                  <h1 style={{ marginBottom: "50px", marginTop: "50px" }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-emoji-laughing"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                  <Form.Label style={{ fontSize: "30px" }}>
                       Client type
                      </Form.Label>
                      <Form.Control
                        name="type"
                        placeholder="passenger or company"
                        
                      />
                  <Form.Label>Company name</Form.Label>
                  <Form.Control
                    name="companyName"
                    placeholder="company name "
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />

                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailCompany"
                    placeholder="Enter email"
                    onChange={this.handleChangeSignIn}
                  />

                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="Company"
                    name="passwordCompany"
                    placeholder="Password"
                    onChange={this.handleChangeSignIn}
                  />

                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    name="phoneNumberCompany"
                    placeholder="Enter your phone number"
                    onChange={this.handleChangeSignIn}
                  />

                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="adress"
                    placeholder="1234 Main St"
                    onChange={this.handleChangeSignIn}
                  />

                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    name="imgurl"
                    placeholder="Enter your image URL"
                    onChange={(e) => {
                      this.setState({ imgUrlCompany: e.target.value });
                    }}
                  />
                  <br></br>
                  <center>
                    <button button type="button" class="btn btn-primary btn-lg btn-block"
                      onClick={this.addCompany}
                    >
                      Submit
                    </button>
                  </center>
                  
                </Container>
              )}
            </Row>
            <Row>
              {this.state.client && (
                <Col id="client">
                  <h1> Client experience </h1>
                  <h4>
                    As a client while using our application you will have the
                    chance to create an account in order <br></br>
                    to see our EVENTS SERVICES and you will have fun !!!!!{" "}
                    <br></br>
                    <br></br>
                    <h5> Time to create your account </h5>
                    <br></br>
                    <center>
                      <Image
                        src="https://tindrumasiankitchen.com/wp-content/uploads/2017/08/click-here-black.png"
                        rounded
                        style={{ width: "200px", height: "200px" }}
                        onClick={() => this.clicked()}
                      />
                    </center>
                  </h4>
                </Col>
              )}

              {this.state.company && (
                <Col id="company">
                  <h1> Company experience </h1>
                  <h4>
                    As a company while using our application you will have the
                    chance to create an account in order <br></br>
                    to post your EVENTS with all details <br></br>
                    <br></br>
                    <h5>Time to create your account </h5>
                    <br></br>
                    <center>
                      <Image
                        src="https://tindrumasiankitchen.com/wp-content/uploads/2017/08/click-here-black.png"
                        rounded
                        style={{ width: "200px", height: "200px" }}
                        onClick={() => this.clicked2()}
                      />
                    </center>
                  </h4>
                </Col>
              )}
            </Row>
          </div>
        )}
      </div>
    );
  }
}
export default SignUpMyAccount;
