import React, { useState, useEffect } from "react";

import { historyData } from "../utils/data";
import { formatDate } from "../utils/functions";

const HistoryList = () => {
  const [data, setData] = useState(historyData.lists[1]);
  const [numberOfColumns, setNumberOfColumns] = useState(3);

  const determineColumnWidth = () => {
    const viewport = document.querySelector(".viewport");
    const width = viewport.offsetWidth;
    setNumberOfColumns(Math.round(width / 200 - 1));
  };

  // calculates the number of columns in the grid whenever the window is resized
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      determineColumnWidth();
    }, 500);
  });

  useEffect(() => {
    let mounted = true
    mounted && determineColumnWidth();
    setData(historyData.lists[1])
    return function cleanup() {
      mounted = false;
    }
  }, []);

  return (
    <div className="history-list">
      <h2>{data.name}</h2>
      <div className="date">
        <span className="material-icons calendar">event_note</span>
        <span>{formatDate(data.date)}</span>
      </div>
      {data.list.categories.map((category, index) => (
        <div className="category" key={index}>
          <h3>{category}</h3>
          <div
            className="items"
            style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
          >
            {data.list.items.map((item, index) => {
              if (item.category === category) {
                return (
                  <div className="item" key={index}>
                    {item.name}
                    <p className="item-count">
                      <span>{item.count}</span> pcs
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
