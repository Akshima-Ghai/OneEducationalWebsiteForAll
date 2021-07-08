import React from 'react';
import "./ResultBox.css";

const Result = ({score, playAgain}) => (
<div className="score-board">
	<div className="score"> Your score is {score} / 5 correct answer ! ! ! </div>
	<button className="playBtn" onClick={playAgain} > Play Again </button>
</div>
)

export default Result;
