import React from 'react';
import { Image } from 'react-bootstrap';
import '../../style/SideNav.css';


class SideBar extends React.Component {
  constructor(props){
    super(props)
    
  }

  render() {
  
    return (
       
        <div>
         <Image src="https://mauritanie-talent-innovation.org/toto.png" roundedCircle /><br></br>
        <br></br>
        <h1 id='div1'>Username </h1>
        <h2 id='div2'>Email adress</h2>
        <h3 id='div3'>Phone number</h3>
        <h4 id='div4'>Description </h4>
        
      </div>
    );
  }
}

export default SideBar;