import React, { Component } from "react";
import "./App.css";

class LiveClockUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <h2 className="time">{this.state.date.toLocaleTimeString().toUpperCase()}</h2>
    );
  }
}

export default LiveClockUpdate;
