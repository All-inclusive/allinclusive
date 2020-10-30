import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../style/SideNav.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const imgStyle = { width: "160px", height: "160px" };
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
          {/* <h4 id='div4'>Description </h4> */}
        </Container>
      </div>
    );
  }
}

export default SideBar;
