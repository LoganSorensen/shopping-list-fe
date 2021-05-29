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
        determineColumnWidth();
    }, []);

    console.log(data);

  return (
    <div className="history-list">
      <h2>{data.name}</h2>
      <div className="date">
        <span className="material-icons calendar">event_note</span>
        <span>{formatDate(data.date)}</span>
      </div>
      {data.list.categories.map((category) => (
        <div className="category">
          <h3>{category}</h3>
          <div className="items" 
              style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}

          >
            {data.list.items.map((item) => {
              if (item.category === category) {
                return (
                  <div className="item">
                    <span className='item-name'>{item.name}</span>
                    <span className="item-count">{item.count} pcs</span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
