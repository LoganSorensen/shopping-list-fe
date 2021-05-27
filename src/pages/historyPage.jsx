import React from "react";

import HistoryItem from "../components/historyItem";

import { historyData } from "../utils/data";

const HistoryPage = () => {
  return (
    <div className="history-page">
      <h2>Shopping history</h2>
      {historyData.dates.map((date) => (
        <div className="month">
          <h3>{date}</h3>
          {historyData.lists.map((list) => {
            if (date === list.month) {
              return <HistoryItem list={list} />;
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
