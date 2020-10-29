import React from 'react';
import render from 'react-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import '../style.css';

class Navigationbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    
render(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand ><button className='reload' onClick={() => window.location.reload(false)}>All-Inclusive</button></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">                
                    </Nav>
                <Nav>
                    <NavDropdown title="Extra" id="collasible-nav-dropdown">
                        <NavDropdown.Item >Job opportunities</NavDropdown.Item>
                        <NavDropdown.Item >Become a Seller</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >About Us</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  eventKey='My Account'>
                        My Account
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )}
}
export default Navigationbar;