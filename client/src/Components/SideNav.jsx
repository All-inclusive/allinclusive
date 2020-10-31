import axios from "axios";
import React from "react";
import { Container, Image, Form } from "react-bootstrap";
import "../../style/SideNav.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //for adding event from company
      name: "",
      type: "",
      place: "",
      date: "",
      description: "",
      imgUrl: "",
      like: 0,
      disLike: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  addEvent(e) {
    e.preventDefault();
    const event = {
      name: this.state.name,
      type: this.state.type,
      date: this.state.date,
      place: this.state.place,
      description: this.state.description,
      imgUrl: this.state.imgUrl,
      like: this.state.like,
      disLike: this.state.disLike,
    };
    console.log(event);
    axios.post("/api/event/add", event).then((result) => {
      console.log(result);
    });
  }

  render() {
    const styleBtn = {
      borderRadius: "8px",
      padding: "13px 45px 17px",
      textAlign: "center",
      margin: "19px",
    };
    const user = this.props.user;
    const company = this.props.company;
    console.log("company in sidenav", company);
    const imgStyle = { width: "160px", height: "160px" };
    if (user) {
      return (
        <div>
          <Container id="sideNav">
            <Image style={imgStyle} src={user.imgUrl} roundedCircle />
            <br></br>
            <br></br>
            <p id="div1">
              Username: {user.firstName} - {user.lastName}
            </p>
            <p id="div2">Email adress: {user.email}</p>
            <p id="div3">Phone number: {user.phoneNumber}</p>
          </Container>
        </div>
      );
    } else if (company) {
      return (
        <div>
          <Container id="sideNav">
            <Image style={imgStyle} src={company.imgUrlCompany} roundedCircle />
            <br></br>
            <br></br>
            <p id="div1">Name: {company.name}</p>
            <p id="div2">Email adress: {company.emailCompany}</p>
            <p id="div3">Phone number: {company.phoneNumberCompany}</p>
            <h3>Add an event</h3>
            <Form.Label style={{ fontSize: "30px" }}>Event Name</Form.Label>
            <Form.Control
              name="name"
              placeholder="name"
              onChange={this.handleChange}
            />
            <Form.Label style={{ fontSize: "30px" }}>Event Type</Form.Label>
            <Form.Control
              name="type"
              placeholder="type"
              onChange={this.handleChange}
            />
            <Form.Label style={{ fontSize: "30px" }}>Event Place</Form.Label>
            <Form.Control
              name="place"
              placeholder="place"
              onChange={(e) => {
                this.setState({ place: e.target.value });
              }}
            />
            <Form.Label style={{ fontSize: "30px" }}>Event Date</Form.Label>
            <Form.Control
              name="date"
              placeholder="date"
              onChange={this.handleChange}
            />
            <Form.Label style={{ fontSize: "30px" }}>
              Event Description
            </Form.Label>
            <Form.Control
              name="description"
              placeholder="description"
              onChange={this.handleChange}
            />
            <Form.Label style={{ fontSize: "30px" }}>Event Image</Form.Label>
            <Form.Control
              name="imgUrl"
              placeholder="imgUrl"
              onChange={this.handleChange}
            />
            <button style={styleBtn} onClick={this.addEvent}>
              Submit
            </button>
          </Container>
        </div>
      );
    }
  }
}

export default SideBar;
