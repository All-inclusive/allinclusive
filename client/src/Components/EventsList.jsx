import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="event">
      <ul>
        {this.props.eventSchema.map(event => 
        <li className="event-name" key={event.name}>
          <div className="event-type" onClick={()=>this.props.handleClick(event)}>{event.name}</div>
          <img src={event.imageUrl} onClick={()=>this.props.handleClick(event)} className="event-image"/>
          </li>)}
      </ul>
    </div>
    )}
}
export default Event;