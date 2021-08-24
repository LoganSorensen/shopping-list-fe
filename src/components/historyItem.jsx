import React from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../utils/functions";

const HistoryItem = ({ list }) => {
  return (
    <Link to={`/history/${list.id}`}>
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
          <span className="date">{formatDate(list.date)}</span>
          <div
            className="status"
            style={{
              color: list.status === "completed" ? "#56ccf2" : "#eb5757",
            }}
          >
            {list.status}
          </div>
          <span className="material-icons-outlined chevron">chevron_right</span>
        </div>
      </div>
    </Link>
  );
};

export default HistoryItem;
