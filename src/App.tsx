import React, { useState } from 'react';
import './App.css';
import Question, { IQuestion } from './Question';
import ScoreView from './ScoreView';
import StartButton from './StartButton';
import questionsJson from './questions.json'
import FinishedView from './FinishedView';
import Title from './Title';
import ContinueButton from './ContinueButton';
const questions: IQuestion[] = questionsJson.questions;

enum Phase {
  notStarted,
  showQuestion,
  showAnswer,
  finished
}
function App() {
  // const questions: IQuestion[] = [
  //   {
  //     question: "Question 1",
  //     answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
  //     correctAnswer: 0
  //   },
  //   {
  //     question: "Question 2",
  //     answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
  //     correctAnswer: 0
  //   }
  // ]
  const [phase, setPhase] = useState<Phase>(Phase.notStarted);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [currentPlayerAnswer, setCurrentPlayerAnswer] = useState<number | null>(null)
  const [score, setScore] = useState<number>(0);
  const currentQuestion = questions[currentQuestionIndex];
  const startGame = () => {
    setPhase(Phase.showQuestion)
    setCurrentQuestionIndex(0)
  }
  const answerQuestion = (question: IQuestion, answerIndex: number) => {
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentPlayerAnswer(answerIndex);
    setPhase(Phase.showAnswer);
  }
  const continueAfterAnswer = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setCurrentPlayerAnswer(null);
      setPhase(Phase.showQuestion)
    } else {
      setPhase(Phase.finished)
    }
  }
  let isCorrect: boolean | undefined; 
  if (phase === Phase.showAnswer) {
    isCorrect = currentQuestion.correctAnswer === currentPlayerAnswer
  }

  return (
    <div className="App">
      <main className="App-main">
        <Title></Title>
        {phase === Phase.notStarted && <StartButton onClick={startGame}></StartButton>}
        {(phase === Phase.showQuestion || phase === Phase.showAnswer) && <Question
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          correctAnswer={currentQuestion.correctAnswer}
          answerQuestion={phase === Phase.showQuestion ? answerQuestion : undefined}
          yourAnswer={currentPlayerAnswer}
        ></Question>}
        {phase === Phase.finished && <FinishedView></FinishedView>}
        {phase !== Phase.notStarted && <ScoreView score={score} maxScore={questions.length} isCorrect={isCorrect}></ScoreView>}
        {phase === Phase.showAnswer && <ContinueButton continue={continueAfterAnswer}></ContinueButton>}
      </main>
    </div>
  );
}

export default App;
