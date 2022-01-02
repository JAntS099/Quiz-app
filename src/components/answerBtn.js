import React from "react";

const AnswerBtn = (props) => {
  return (
    <div
      onClick={(e) => props.onClick && props.onClick(e)}
      style={{
        width: "300px",
        height: "150px",
        overflowWrap: "break-word",
        borderRadius: "25px",
        cursor: props.onClick ? "pointer" : "default",
      }}
      className={`${props.bg ?? "bg-secondary"}`}
      data-value={props.answer}
    >
      <div className="pt-4">
        <span className={`h4 fw-bold ${props.txtColor ?? "text-white"}`}>
          {props.answer ?? ""}
        </span>
      </div>
    </div>
  );
};

export default AnswerBtn;
