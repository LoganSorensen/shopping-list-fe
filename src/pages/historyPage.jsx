import React from "react";

import HistoryItem from "../components/historyItem";

import { historyData } from "../utils/data";

const HistoryPage = () => {
  return (
    <div className="history-page">
      <h2>Shopping history</h2>
      {historyData.dates.map((date, index) => (
        <div key={index} className="month">
          <h3>{date}</h3>
          {historyData.lists.map((list, index) => {
            if (date === list.month) {
              return <HistoryItem key={index} list={list} />;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
