import React from 'react';
import ReactDOM from 'react-dom';
import Client from './Components/Client.jsx'
import './style.css'
class App extends React.Component {
    render(){
        return(
           <div>
               <Client />
           </div> 
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
