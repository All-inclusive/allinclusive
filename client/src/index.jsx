import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import BecomeASeller from "./Components/BecomeASeller.jsx";
// import SignIn from './Components/SignIn.jsx';
import SignUpMyAccount from "./Components/SignUpMyAccount.jsx";
import Slide from "./Components/SlideShow.jsx";
import Filter from "./Components/searchBar.jsx";
import JobOpp from "./Components/JobOpp.jsx";
// import Client from './Components/Client.jsx';
// import SideNav from './Components/SideNav.jsx';
import EventsList from "./Components/EventsList.jsx";
// import Company from './Components/Company.jsx';
import ScrollArea from "react-scrollbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "",
    };
    this.changeVeiw = this.changeView.bind(this);
  }

  changeView(e) {
    this.setState({ view: e });
  }

  render() {
    if (this.state.view === "") {
      return (
        <div>
          <Navbar changeView={(x) => this.changeView(x)} />
          <Slide />
          <center>
            <Filter />
            <EventsList />
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Footer />
        </div>
      );
    } else if (this.state.view === "My Account") {
      return (
        <div>
          <Navbar changeView={(x) => this.changeView(x)} />
          <SignUpMyAccount />
        </div>
      );
    } else if (this.state.view === "Become a Seller") {
      return (
        <div>
          <Navbar changeView={(x) => this.changeView(x)} />
          <BecomeASeller />
        </div>
      );
    } else if (this.state.view === "Job opportunities") {
      return (
        <div>
          <Navbar changeView={(x) => this.changeView(x)} />
          <JobOpp />
        </div>
      );
    }
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
