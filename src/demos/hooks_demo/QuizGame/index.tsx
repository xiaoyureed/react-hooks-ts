import React, { MouseEvent, useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { GlobalStyle } from "./styles";
import { Difficulty, fetchQuestions, QuestionDisplay } from "./util";

const TOTAL_QUESTIONS = 10;

export interface IUserAnswer {
  question: string;
  answer: string;
  isRight: boolean;
  rightAnswer: string;
}

const QuizGame: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionDisplay[]>([]);
  // 计数
  // 当前是第 num + 1 题
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  // 是否结束
  const [gameOver, setGameOver] = useState(true);
  // 用户点击的答案
  const [userAnswers, setUserAnswers] = useState<Array<IUserAnswer>>([]);

  const [clicked, setClicked] = useState(false);

  // start the game
  const startQuiz = () => {
    setGameOver(false);
    (async () => {
      setLoading(true);
      setQuestions(await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
      setLoading(false);
    })();
  };

  const checkAnswer = (ev: MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;

    const userAnswer = ev.currentTarget.value;
    const isRight = questions[num].correct_answer === userAnswer;
    if (isRight) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => {
      return [
        ...prev,
        {
          question: questions[num].question,
          answer: userAnswer,
          isRight,
          rightAnswer: questions[num].correct_answer,
        },
      ];
    });

    setClicked(true);
  };

  const nextQuestion = () => {
    const nextQuestionNr = num + 1;
    if (nextQuestionNr > TOTAL_QUESTIONS) {
      return;
    }

    setNum((prev) => prev + 1);
    setClicked(false);
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <h1>Quiz Game</h1>
        {/* if game is over or user answered all question then show start button */}
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={() => startQuiz()}>startQuiz</button>
        )}
        {/* if game is not over show score*/}
        {!gameOver && <p>score: {score}</p>}
        {/* if game start, show question card*/}
        {!gameOver &&
          (loading ? (
            <p>loading...</p>
          ) : (
            <QuestionCard
              questionNr={num + 1}
              totalQuestionNr={TOTAL_QUESTIONS}
              question={questions[num].question}
              answers={questions[num].answers}
              userAnswer={userAnswers[num]}
              callback={checkAnswer}
              userClicked={clicked}
            />
          ))}
        {clicked && num + 1!== TOTAL_QUESTIONS && (
          <button className="next" onClick={() => nextQuestion()}>next</button>
        )}
      </div>
    </>
  );
};

export default QuizGame;
