import { Component } from "react";

class Greeting extends Component {
  render() {
    return <p>Привет, {this.props.name}</p>;
  }
}

export default Greeting;
