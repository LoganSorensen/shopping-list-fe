import React, { useState, useEffect } from "react";
import axios from "axios";

import HistoryItem from "../components/historyItem";

const HistoryPage = () => {
  const [lists, setLists] = useState([]);
  const [dates, setDates] = useState(["June 2021"]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/lists`)
      .then((res) => {
        setLists(res.data.lists);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    lists.forEach((list) => {
      if (!dates.includes(list.monthCreated)) {
        setDates([...dates, list.monthCreated]);
      }
    });
    // eslint-disable-next-line
  }, [lists]);

  return (
    <div className="history-page">
      <h2>Shopping history</h2>
      {dates.map((date) => (
        <div key={date} className="month">
          <h3>{date}</h3>
          {lists.map((list) => {
            if (date === list.monthCreated) {
              return <HistoryItem key={list._id} list={list} />;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
