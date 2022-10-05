import React from "react"
import { IQuestion } from "./Question";
export interface IProps extends IQuestion {
  yourAnswer: number,
  continue: () => unknown
}
export default function ShowAnswer(props: IProps) {
  const answerItems = props.answers.map((answer, answerIndex) => {
    const classNames = ["answer"];
    if (answerIndex === props.correctAnswer) {
      classNames.push("correct")
    } else if (answerIndex === props.yourAnswer) {
      classNames.push("wrong")
    }
    return (<div className="answer">
      {answer}
    </div>);
  })
  return (
    <div className="question-box">
      <div className="question">{props.question}</div>
      <div className="answers">
        {answerItems}
      </div>
      {props.yourAnswer === props.correctAnswer && <div className="message-correct">Correct!</div>}
      {props.yourAnswer !== props.correctAnswer && <div className="message-wrong">Wrong!</div>}
      <div className="continueButton" onClick={props.continue}>
        Continue
      </div>
    </div>
  )
}
