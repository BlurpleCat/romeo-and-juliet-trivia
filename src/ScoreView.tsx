import React  from 'react';
interface IProps {
  score: number;
  maxScore: number;
  isCorrect?: boolean;
}
export default function ScoreView(props: IProps) {

  return (<div className="score-view">
    {props.isCorrect === true && <div className="is-correct correct">✅</div>}
    {props.isCorrect === false && <div className="is-correct wrong">❌</div>}
    <div className="score">Score {props.score}/{props.maxScore}</div>
  </div>)
}
