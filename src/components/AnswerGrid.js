import React from "react";
import AnswerBtn from "./answerBtn";

const AnswerGrid = (props) => {
  const [first, second, thirth, fourth] = props.answers;
  const answerBoxClass = "p-4 mt-5 row";

  return (
    <div className="d-flex gap-4 mt-5">
      <AnswerBtn
        bg="bg-primary"
        answer={first ?? ""}
        onClick={(e) => props.onClick && props.onClick(e)}
      />
      <AnswerBtn
        bg="bg-danger"
        answer={second ?? ""}
        onClick={(e) => props.onClick && props.onClick(e)}
      />

      <AnswerBtn
        bg="bg-success"
        answer={thirth ?? ""}
        onClick={(e) => props.onClick && props.onClick(e)}
      />
      <AnswerBtn
        bg="bg-dark"
        answer={fourth ?? ""}
        onClick={(e) => props.onClick && props.onClick(e)}
      />
    </div>
  );
};

export default AnswerGrid;
