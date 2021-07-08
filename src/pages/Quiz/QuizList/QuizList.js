import React from "react";
import { Link } from "react-router-dom";
import "./QuizList.css";

const QuizList = () => {
  return (
    <section className="quizlist__main">
      <div className="quizlist__container">
        <div className="quizlist__quiz--card">
          <Link to="/quiz/122">Quiz</Link>
        </div>
      </div>
    </section>
  );
};

export default QuizList;
