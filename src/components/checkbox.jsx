import React from "react";

const Checkbox = ({ completed, toggleCompleted }) => {
  return (
    <div
      className={`${completed ? "checked" : ""} checkbox noselect`}
      onClick={toggleCompleted}
    >
      <span className="material-icons-outlined">done</span>
    </div>
  );
};

export default Checkbox;
