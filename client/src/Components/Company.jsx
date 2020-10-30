import React, { Component } from "react";

import { Col, Container, Row,Card,ListGroup,ListGroupItem, Table, Button, } from "react-bootstrap";
import ChatBox from './ChatBox.jsx'


class Company extends Component  {
  
    render(){
      var sectionStyle = {
        marginTop:'50px',
        fontSize: "30px",
        width: "100%",
        height: "900px",
        backgroundImage:
          "url(" +
          "https://img.over-blog-kiwi.com/1/48/86/09/20191101/ob_8e56a6_ob-46b210-ob-36939e-vj56emye0nx7rs-u-k.gif" +
          ")",
      };
        return (
      
          
        <Container style={sectionStyle}>
            
              <Col>
              <Card style={{ width: '18rem' }}>
  <Card.Img  variant="top" src="https://files.slack.com/files-pri/T0178VC0Y48-F01DEPKEKM1/ed79ddcc-fcab-44a3-b050-d54cdffa159c_200x200.png" />
  <Card.Body>
    <Card.Title>Welcome ! </Card.Title>
    <Card.Text>
     You can post your events 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Date</ListGroupItem>
    <ListGroupItem>Info</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://www.facebook.com/TTE.Trust.Travel.Events">TTE trust and events</Card.Link>
    
  </Card.Body>
</Card>
              </Col>
            
              
                <center>
                <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Partners</th>
      <th>Food</th>
      <th>Transportation </th>
      <th>Artists</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Joes pizza </td>
      <td>Salem</td>
      <td>Yuma band</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Plan B</td>
      <td>rentil car laouina</td>
      <td>DJ Dali</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">HuBBo</td>
      
    </tr>
  </tbody>
</Table>
</center>              
            <Container style={sectionStyle} >
              <center>
            <h1 for="w3review">Post your event </h1><br></br>
            <label for="w3review">Title </label><br></br>
            <input type="text" id="title" name="title"/><br></br>
            <label for="w3review">Date </label><br></br>
            
            <input type="date" id="fname" name="fname"/><br></br>

            <label for="w3review">Description </label><br></br>
<textarea id="w3review" name="w3review" rows="4" cols="50">
 ...
  </textarea>
  <br></br>
 <Button  variant="dark">Done ! </Button>
  </center>
            </Container>
    
          </Container>
          
     
    )
    }
}
export default Company;