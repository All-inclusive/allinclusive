import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../style/SideNav.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <Container id="sideNav">
          <Image src={user.imgUrl} roundedCircle />
          <br></br>
          <br></br>
          <h1 id="div1">
            Username {user.firstName} - {user.lastName}
          </h1>
          <h2 id="div2">Email adress {user.email}</h2>
          <h3 id="div3">Phone number {user.phoneNumber}</h3>
          {/* <h4 id='div4'>Description </h4> */}
        </Container>
      </div>
    );
  }
}

export default SideBar;
