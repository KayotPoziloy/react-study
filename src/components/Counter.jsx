import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrease = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.increase}>Увеличить</button>
        <button onClick={this.decrease}>Уменьшить</button>
        <p>{this.state.count}</p>
      </>
    );
  }
}
