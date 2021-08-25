import React from "react";
import { Link } from "react-router-dom";

const HistoryItem = ({ list }) => {
  return (
    <Link to={`/history/${list._id}`}>
      <div className="history-item">
        <div className="name-and-status">
          <span className="name">{list.name}</span>
          <div
            className="status"
            style={{
              color: list.status === "completed" ? "#56ccf2" : "#eb5757",
            }}
          >
            {list.status}
          </div>
        </div>
        <div>
          <span className="material-icons calendar">event_note</span>
          <span className="date">{list.dateCreated}</span>
          <div
            className="status"
            style={{
              color: list.completed ? "#56ccf2" : "#eb5757",
            }}
          >
            {list.completed ? "completed" : "cancelled"}
          </div>
          <span className="material-icons-outlined chevron">chevron_right</span>
        </div>
      </div>
    </Link>
  );
};

export default HistoryItem;
