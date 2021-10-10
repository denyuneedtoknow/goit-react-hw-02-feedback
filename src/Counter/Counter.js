import React from "react";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span>{this.state.value}</span>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            +
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
