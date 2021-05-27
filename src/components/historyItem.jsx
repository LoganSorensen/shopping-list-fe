import React from "react";

const HistoryItem = ({ list }) => {
  const daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const formatDate = (date) => {
    return `${daysOfTheWeek[date[0]]} ${date[1]}.${date[2]}.${date[3]}`;
  };
  return (
    <div className="history-item">
      <span className="name">{list.name}</span>
      <div>
        <span className="material-icons calendar">event_note</span>
        <span className="date">{formatDate(list.date)}</span>
        <div
          className="status"
          style={{ color: list.status === "completed" ? "#56ccf2" : "#eb5757" }}
        >
          {list.status}
        </div>
        <span className="material-icons-outlined chevron">chevron_right</span>
      </div>
    </div>
  );
};

export default HistoryItem;
