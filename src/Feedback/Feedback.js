import React from "react";

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: this.props.initialValue.good,
    neutral: this.props.initialValue.neutral,
    bad: this.props.initialValue.bad,
  };

  handleGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="Feedback">
        <div>
          <div className="reactionBlock">
            <h2>Please leave your feedback</h2>
            <button type="button" onClick={this.handleGood}>
              Good
            </button>
            <button type="button" onClick={this.handleNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleBad}>
              Bad
            </button>
          </div>
          <div className="statBlock">
            <h2>Statistics</h2>
            <span>Good:{this.state.good}</span>
            <span>Neutral:{this.state.neutral}</span>
            <span>Bad{this.state.bad}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
