import React from 'react';

interface IProps {
  question: string;
  answers: string[];
  correctAnswer: number;
}
export default function Game(props: IProps) {

  return (<div>
    This is the game
  </div>)
}
