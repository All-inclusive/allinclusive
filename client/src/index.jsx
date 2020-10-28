import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar.jsx';
import AboutUs from './Components/AboutUs.jsx';
import BecomeASeller from './Components/BecomeASeller.jsx';
import Company from './Components/Company.jsx';
import JobOpp from './Components/JobOpp.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import Slide from './Components/SlideShow.jsx';
import Events from './Components/EventsList.jsx';
class App extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Slide /> 
                <Events />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
