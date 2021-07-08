import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./SingleQuiz.css";
import QuestionBox from './../../../components/QuestionBox/QuestionBox';
// import Result from './components/ResultBox';

class SingleQuiz extends Component {
    constructor() {
        super();
        this.state = {
        questionBank: [],
        score: 0,
        responses: 0
        };
    }

    // Function to get question from ./question
    getQuestions = () => {
        questionAPI().then(question => {
        this.setState({questionBank: question});
        });
    };

    // Set state back to default and call function
    playAgain = () => {
        this.getQuestions();
        this.setState({score: 0, responses: 0});
    };

    // Function to compute scores
    computeAnswer = (answer, correctAns) => {
        if (answer === correctAns) {
        this.setState({
            score: this.state.score + 1
        });
        }
        this.setState({
        responses: this.state.responses < 5
            ? this.state.responses + 1
            : 5
        });
    };

    // componentDidMount function to get question
    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (<div className="container">
        <div className="title">
            QuizOn
        </div>

        {this.state.questionBank.length > 0 &&
        this.state.responses < 5 &&
        this.state.questionBank.map(({question, answers,
        correct, questionId}) => <QuestionBox question=
        {question} options={answers} key={questionId}
        selected={answer => this.computeAnswer(answer, correct)}/>)}

        {
            this.state.responses === 5
            ? (<Result score={this.state.score}
                playAgain={this.playAgain}/>)
            : null
        }

        </div>)
    }
}

export default SingleQuiz
