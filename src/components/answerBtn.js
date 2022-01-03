import React from "react";

const AnswerBtn = (props) => {
  return (
    <div
      onClick={(e) => props.onClick && props.onClick(e)}
      className={`${props.bg ?? "bg-secondary"} btns`}
      data-value={props.answer}
    >
      <div className="pt-4" data-value={props.answer}>
        <span
          className={`h4 fw-bold ${props.txtColor ?? "text-white"}`}
          data-value={props.answer}
        >
          {props.answer ?? ""}
        </span>
      </div>
    </div>
  );
};

export default AnswerBtn;
