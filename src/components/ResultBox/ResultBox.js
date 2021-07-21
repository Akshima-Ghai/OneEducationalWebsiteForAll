import React from "react";
import "./ResultBox.css";

const Result = ({ score, resetQuiz,correct, incorrect,total  }) => (
  <div className="resultbox__container">
    <div className="resultbox__main">
      <h1>Quiz Finished!</h1>
      <p>Your Score : <span>{score.toFixed(2)}%</span></p>
      <p>Correct Answers : <span>{correct}</span></p>
      <p>Incorrect Answers : <span>{incorrect}</span></p>
      <p>Total Question : <span>{total}</span></p>
      <button type="button" onClick={resetQuiz}>
        Reset Quiz
      </button>
    </div>
  </div>
);

export default Result;
