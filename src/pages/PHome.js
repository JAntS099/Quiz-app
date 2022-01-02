import React, { useState } from "react";
import { useFetchCountries } from "../api/countriesApi";
import { useQuery, gql } from "@apollo/client";
import AnswerBtn from "../components/answerBtn";
import Questioner from "../components/questioner";
import QuestionCard from "../components/QuestionCard";
import AnswerGrid from "../components/AnswerGrid";
import { questions } from "../components/questions";
import PLeaderBoard from "./PLeaderBoard";

const isCorrectAnswer = (solution, givenAnswer) => solution === givenAnswer;

const randomizer = (a, b) => 0.5 - Math.random();

const PHome = () => {
  const [questionsState, setQuestionsState] = useState(
    questions.sort(randomizer)
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    questionsState[0] ?? undefined
  );

  const handleOnClick = (e) => {
    const givenAnswer = e.target.dataset.value;

    setQuestionsState((prev) =>
      prev.map((question) =>
        question.questionName === currentQuestion.questionName
          ? {
              ...question,
              correct: isCorrectAnswer(currentQuestion.solution, givenAnswer),
            }
          : question
      )
    );

    const currentIndex = questionsState
      .map((item) => item.questionName)
      .indexOf(currentQuestion.questionName);

    const lastIndex = questionsState.length - 1;
    if (currentIndex <= lastIndex) {
      setCurrentQuestion(questionsState[currentIndex + 1]);
    }
  };

  return (
    <div className="container mt-5">
      {currentQuestion ? (
        <div>
          <QuestionCard question={currentQuestion.question} />
          <AnswerGrid
            onClick={handleOnClick}
            answers={currentQuestion.answers}
          />
        </div>
      ) : (
        <PLeaderBoard
          score={questionsState.filter((question) => question.correct).length}
        />
      )}
    </div>
  );
};

export default PHome;

// set the correct to TRUE if its true
// at the end, save the number of correct
// user can put his name
// show leaderboard
