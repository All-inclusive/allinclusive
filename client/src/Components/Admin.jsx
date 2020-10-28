import React from 'react';
import render from 'react-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../../style/SideNav.css';
// import './dist/img/logo.png';



class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (             
              <Container>
                  <Row>  
                  <Col>
            <Image src='../../dist/img/logo.png' roundedCircle /><br></br>
           <br></br>
           <h1 id='div1'>Username </h1>
           <h2 id='div2'>Email adress</h2>
           <h3 id='div3'>Phone number</h3>
           <h4 id='div4'>Description </h4>
           </Col>
           <Col xs={6}>2 of 2 (wider)</Col>
           </Row>
           </Container>
         
         ); 
    }
}
 
export default Admin;