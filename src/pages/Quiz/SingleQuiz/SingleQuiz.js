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
      {
        prompt: "Everything in React is a _________",
        answers: ["Module", "Component", "Package", "Class"],
        correct: 1,
      },
      {
        prompt: "In which directory React Components are saved?",
        answers: [
          "Inside js/components/",
          "Inside vendor/components/",
          "Inside vendor/components/",
          "Inside vendor/",
        ],
        correct: 0,
      },
      {
        prompt: "What is Babel?",
        answers: [
          "A transpiler.",
          "An interpreter",
          "A Compiler",
          "Both Compiler and Transpilar",
        ],
        correct: 3,
      },
      {
        prompt: "How many elements does a react component return?",
        answers: [
          "1 Element",
          "2 Elements",
          "Multiple Elements",
          "None of the above",
        ],
        correct: 2,
      },
      {
        prompt: "What is ReactJS?",
        answers: [
          "Server-side Framework",
          "User-interface framework",
          "A Library for building interaction interfaces",
          "None of the above",
        ],
        correct: 2,
      },
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
