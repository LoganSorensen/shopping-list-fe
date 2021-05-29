import React from "react";
import { Link } from "react-router-dom";

import HistoryList from "../components/historyList";

const HistoryListPage = () => {
  return (
    <div className="history-list-page">
      <Link to='/history'>
        <span className="material-icons-outlined arrow">arrow_right_alt</span>
        back
      </Link>
      <HistoryList />
    </div>
  );
};

export default HistoryListPage;
