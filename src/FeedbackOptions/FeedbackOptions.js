function FeedbackOptions({ options, click }) {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} type="button" name={option} onClick={click}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
