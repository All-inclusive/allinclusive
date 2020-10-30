import React from "react";
import axios from "axios";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: [],
      likes: 0,
      dislikes: 0,
    };
    this.addLike = this.addLike.bind(this);
    this.addDislike = this.addDislike.bind(this);
  }

  componentDidMount() {
    const options = {
      method: "get",
      url: "/api/event",
    };
    axios(options)
      .then((response) => {
        console.log("response", response);
        this.setState({
          eventsArray: response.data,
        });
        console.log("events in axios", this.state.eventsArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addLike(e) {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
    e.preventDefault();
  }

  addDislike(e) {
    let newCount2 = this.state.dislikes + 1;
    this.setState({
      dislikes: newCount2,
    });
    e.preventDefault();
  }

  render() {
    const imgStyle = { width: "250px", height: "160px" };
    const events = this.state.eventsArray;
    console.log("event in render", events);
    const listOfEvents = events.map((evenement, i) => {
      return (
        <div className="event" key={i}>
          <img style={imgStyle} className="imgUrl" src={evenement.imgUrl} />
          <div className="name">name: {evenement.name}</div>
          <div className="type">Type: {evenement.type}</div>
          <div className="place">Place: {evenement.place}</div>
          <div className="date">date: {evenement.date}</div>
          <div className="description">
            description: {evenement.description}
          </div>
          <button className="like" onClick={this.addLike}>
            👍: {this.state.likes}
          </button>
          <button className="dislike" onClick={this.addDislike}>
            👎: {this.state.dislikes}
          </button>
        </div>
      );
    });
    return <div> {listOfEvents} </div>;
  }
}
export default Event;
