import "./App.css";
import Counter from "./Counter/Counter";
import Feedback from "./Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Feedback initialValue={{ good: 0, neutral: 0, bad: 0 }} />
    </div>
  );
}

export default App;
