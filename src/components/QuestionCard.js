import React from "react";

const QuestionCard = (props) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col col-md-7 questionCard bg-info">
        <h1>{props.question ?? ""}</h1>
      </div>
    </div>
  );
};

export default QuestionCard;
