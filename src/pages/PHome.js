import React, { useState, useEffect } from "react";
import AnswerBtn from "../components/answerBtn";
import QuestionCard from "../components/QuestionCard";
import AnswerGrid from "../components/AnswerGrid";
import { questions } from "../components/questions";
import PLeaderBoard from "./PLeaderBoard";
import {
  randomizer,
  countryQuery,
  mapToQuestionDataType,
  useFetchData,
  isCorrectAnswer,
} from "../util/util";

const PHome = () => {
  const data = useFetchData();

  const [questionsState, setQuestionsState] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  useEffect(() => {
    if (data) {
      const parseData = mapToQuestionDataType(data)
        .sort(randomizer)
        .filter((item, idx) => idx < 20);

      setQuestionsState(parseData);
      setCurrentQuestion(parseData[0]);
    }
  }, [data]);

  const handleOnClick = (e) => {
    const givenAnswer = e.target.dataset.value;
    setQuestionsState((prev) =>
      prev.map((question) =>
        question.question === currentQuestion.question
          ? {
              ...question,
              correct: isCorrectAnswer(currentQuestion.solution, givenAnswer),
            }
          : question
      )
    );

    const currentIndex = questionsState
      .map((item) => item.question)
      .indexOf(currentQuestion.question);

    const lastIndex = questionsState.length - 1;
    if (currentIndex <= lastIndex) {
      setCurrentQuestion(questionsState[currentIndex + 1]);
    }
  };

  return (
    <div className="container mt-5">
      {currentQuestion ? (
        <div className="Questioner">
          <div className="row align-items-end justify-content-center">
            <div className="col-md-7 questionCard">
              <QuestionCard question={currentQuestion.question} />
            </div>
          </div>

          <hr className="divider" />

          <div className="row align-items-center justify-content-md-center">
            <AnswerGrid
              onClick={handleOnClick}
              answers={currentQuestion.answers}
            />
          </div>
        </div>
      ) : (
        <PLeaderBoard
          totalQuestions={questionsState && questionsState.length}
          score={
            questionsState
              ? questionsState.filter((question) => question.correct).length
              : 0
          }
        />
      )}
    </div>
  );
};

export default PHome;
