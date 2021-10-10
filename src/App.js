import React from "react";
import "./App.css";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  totalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  percents = () => {
    const goodViews = (this.state.good / this.totalFeedbacks()) * 100;
    return Math.round(goodViews);
  };
  render() {
    return (
      <div>
        <Section
          title={"feedback"}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              click={this.btnHandler}
            ></FeedbackOptions>
          }
        ></Section>
        {this.totalFeedbacks() > 0 ? (
          <Section
            title={"Stats"}
            children={
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.totalFeedbacks()}
                percentsApproving={this.percents()}
              ></Statistics>
            }
          ></Section>
        ) : (
          <Notification message={"No data collected yet"}></Notification>
        )}
      </div>
    );
  }
}

export default App;
