import React, { Component } from "react";
import "./SingleQuiz.css";
import QuestionBox from "./../../../components/QuestionBox/QuestionBox";
import ResultBox from "./../../../components/ResultBox/ResultBox";

class SingleQuiz extends React.Component {
  state = {
    questionData: [],
    progress: 0,
    score: 0,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let fetchedQuestion = [
      { prompt: "Question 1", answers: ["a", "b", "c", "d"], correct: 2 },
      { prompt: "Question 2", answers: ["a", "b", "c", "d"], correct: 0 },
    ];

    this.setState({
      questionData: fetchedQuestion,
    });
  };

  checkAnswer = (index) => {
    var correct = this.state.questionData[this.state.progress].correct;
    var newScore = 0,
      newProgress = 0;
    if (correct === index) {
      newScore = this.state.score + 1;
      this.setState({ score: newScore });
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    } else {
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    }
  };

  resetQuiz = () => {
    this.setState({ score: 0, progress: 0 });
  };

  render() {
    var questionDatum = this.state.questionData[this.state.progress];
    if (this.state.questionData.length > this.state.progress) {
      return (
        <div>
          <QuestionBox
            questionIndex={this.state.progress + 1}
            answers={questionDatum.answers}
            answerCallback={this.checkAnswer}
            questionDatum={questionDatum}
          />
        </div>
      );
    } else {
      return (
        <ResultBox
          resetQuiz={this.resetQuiz}
          score={(this.state.score / this.state.questionData.length) * 100}
        />
      );
    }
  }
}

export default SingleQuiz;
