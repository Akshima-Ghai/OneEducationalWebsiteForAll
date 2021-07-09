import React, { useState } from "react";
import "./QuestionBox.css";

class ListItem extends React.Component {
  onClickAnswer = () => {
    this.props.answerCallback(this.props.index);
  };
  render() {
    return (
      <li
        onClick={(event) => {
          event.target.style.backgroundColor = "red";
          event.target.style.color = "white";
          setTimeout(() => {
            event.target.style.backgroundColor = "transparent";
            event.target.style.color = "#222";
            this.onClickAnswer();
          }, 250);
        }}
      >
        {this.props.answerItem}
      </li>
    );
  }
}

const QuestionBox = (props) => {
  return (
    <div className="quizbox__container">
      <h1 className="quizbox__head">ReactJS Quiz</h1>
      <div className="quizbox__main">
        <h1>
          {props.questionIndex}. {props.questionDatum.prompt}
        </h1>
        <ul>
          {props.answers.map(function (answer, index) {
            return (
              <ListItem
                answerItem={answer}
                answerCallback={props.answerCallback}
                index={index}
              />
            );
          }, this)}
        </ul>
      </div>
    </div>
  );
};

export default QuestionBox;
