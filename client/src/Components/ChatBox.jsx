import React, { Component } from 'react';
import { Container,Row } from 'react-bootstrap';
import  '../../style/ChatBox.css';

export default class ChatBox extends Component {
    render() {
        return (
            <div>
                <Container>
                   <Row>
               <div class="wrapper">
               <h1>Welcome </h1>
    <div class="main" >
    
        <div class="px-2 scroll">
        <h4 style={{backgroundColor:'rgb(117, 12, 95)', color:'white'}}class="name">All Inclusive team </h4>
        
            <div class="d-flex align-items-center text-right justify-content-end ">
                <div class="pr-2"> 
                    
                    <center>
                        <p class="msg">Contact us via our green number 100200300</p>
                    </center>
                </div>
                <div><img src="https://files.slack.com/files-pri/T0178VC0Y48-F01DEPKEKM1/ed79ddcc-fcab-44a3-b050-d54cdffa159c_200x200.png" width="100" class="img1" /></div>
            </div>
            
           
        </div>
        <nav class="navbar bg-white navbar-expand-sm d-flex justify-content-between"> 
        <input type="text number" name="text" class="form-control" placeholder="Type a message..."/>
        
         <button type="button" class="btn btn-warning">Send</button>
        </nav>
    </div>
</div> 
</Row> 
</Container>
            </div>
        )
    }
}
