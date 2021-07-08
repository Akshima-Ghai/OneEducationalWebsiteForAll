import React from "react";
import "./ResultBox.css";

const Result = ({ score, resetQuiz }) => (
  <div className="resultbox__container">
    <div className="resultbox__main">
      <h1>Quiz Finished!</h1>
      <p>
        {" "}
        Your Score : <span>{score.toFixed(2)}%</span>
      </p>
      <button type="button" onClick={resetQuiz}>
        Reset Quiz
      </button>
    </div>
  </div>
);

export default Result;
