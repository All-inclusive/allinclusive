import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar.jsx';

import './style.css'
class App extends React.Component {
    render(){
        return(

            <div>
                <Navbar></Navbar>
                <Client/>
            </div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
