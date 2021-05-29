import React from "react";

import { formatDate } from "../utils/functions";

const HistoryItem = ({ list }) => {
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
