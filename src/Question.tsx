import React from "react"
export interface IQuestion {
  question: string;
  answers: string[];
  correctAnswer: number;
}
interface IProps extends IQuestion {
  yourAnswer?: number | null;
  answerQuestion?: (question: IQuestion, answerIndex:number) => unknown;
}
export default function Question(props: IProps) {

  const answerItems = props.answers.map((answer, answerIndex) => {
    const classNames = ["answer"];
    if (props.yourAnswer !== null) {
      if (answerIndex === props.correctAnswer) {
        classNames.push("correct")
      } else if (answerIndex === props.yourAnswer) {
        classNames.push("wrong")
      }
    }
    let onClick;
    if (props.answerQuestion) {
      onClick = () => props.answerQuestion!(props, answerIndex);
    }
    return <div
      onClick={onClick} className={classNames.join(' ')}>
      {answer}
    </div>
  })
  const classNames = ["question-box"];
  if (props.answerQuestion) {
    classNames.push("can-answer");
  }
  return (
    <div className={classNames.join(' ')}>
      <div className="question">{props.question}</div>
      <div className="answers">
        {answerItems}
      </div>
    </div>
  )
}
