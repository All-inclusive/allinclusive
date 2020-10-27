import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar.jsx';

class App extends React.Component {
    render(){
        return(
            <div>
                <Navbar></Navbar>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));