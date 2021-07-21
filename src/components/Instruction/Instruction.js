import React from 'react'
import "./Instruction.css"

export default function Instruction(props){
    return (
        <section className="instruction__container">
            <div className="ins__main">
                <ul className="ins__list">
                    <li>⊚ The Time Limit for the quiz is 3 minutes.</li>
                    <li>⊚ If you want to choose an answer, simply click on the option of your choice.</li>
                    <li>⊚ The total score for the quiz is based on your responses to all questions.</li>
                    <li>⊚ In case you are not satisfied with the results, you can retake the quiz until you get the best results.</li>
                </ul>
                <button className="ins__btn" onClick={props.closeInstruction}>Start</button>
            </div>
        </section>
    )
}