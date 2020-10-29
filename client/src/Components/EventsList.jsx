import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0
    }
    this.addLike=this.addLike.bind(this);
    this.addDislike=this.addDislike.bind(this);
  };
  addLike (e) {
    let newCount = this.state.likes + 1;
      this.setState({
      likes: newCount
    });
    e.preventDefault();
  };
  
  addDislike (e) {
    let newCount2 = this.state.dislikes + 1;
      this.setState({
      dislikes: newCount2
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="event">
        <ul>
          <img
          className="imgUrl"
          src={this.props.imgUrl}
          />
          <div className="name">User: {this.props.name}</div>
          <div className="type">Type: {this.props.type}</div>
          <div className="place">Place: {this.props.place}</div>
          <div className="date">published: ...</div>
          <button className="like" onClick={this.addLike}>👍: {this.state.likes}</button>
          <button className="dislike" onClick={this.addDislike}>👎: {this.state.dislikes}</button>
        </ul>
    </div>
  )}
}
export default Event;