import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar.jsx';
// import AboutUs from './Components/AboutUs.jsx';
// import BecomeASeller from './Components/BecomeASeller.jsx';
// import Company from './Components/Company.jsx';
// import JobOpp from './Components/JobOpp.jsx';
// import SignIn from './Components/SignIn.jsx';
import SignUpMyAccount from './Components/SignUpMyAccount.jsx';
import Slide from './Components/SlideShow.jsx';
import Client from './Components/Client.jsx';
import SideNav from './Components/SideNav.jsx';


// import Events from './Components/EventsList.jsx';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            veiw: ''
        }
        this.changeVeiw= this.changeVeiw.bind(this)
    }

    changeVeiw(e){
        console.log(e.target.value)
       
    }

    render(){
        
        return(
            <div>
                <Navbar/>
               
                {/* <SideNav />   */}
                {/* <Events /> */}
            </div>
        )
    }

}
ReactDOM.render(<App />, document.getElementById("app"));
