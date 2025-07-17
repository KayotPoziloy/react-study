import { Component } from "react";

export default class ToggleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}></button>
        {this.state.isVisible ? <p>Скрыть</p> : <p>Показать</p>}
      </div>
    );
  }
}
