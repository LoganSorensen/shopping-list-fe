import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { setCurrentPage } from "../actions/setPageStateActions";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [badgeNum, setBadgeNum] = useState(3);

  return (
    <div className="navigation">
      <Logo />
      <div className="nav-links">
        <Link to="/" className="nav-link" onClick={() => setCurrentPage("/")}>
          <div
            className={`${
              currentPage === "/" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="material-icons noselect">format_list_bulleted</span>

          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>items</span>
          </div>
        </Link>
        <Link
          to="/history"
          className="nav-link"
          onClick={() => setCurrentPage("/history")}
        >
          <div
            className={`${
              currentPage === "/history" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="material-icons noselect">replay</span>
          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>history</span>
          </div>
        </Link>
        <Link
          to="/statistics"
          className="nav-link"
          onClick={() => setCurrentPage("/statistics")}
        >
          <div
            className={`${
              currentPage === "/statistics" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="material-icons-outlined noselect">assessment</span>
          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>statistics</span>
          </div>
        </Link>
      </div>
      <button className="shopping-list-btn">
        {badgeNum > 0 && <div className="badge">{badgeNum}</div>}
        <span className="material-icons-outlined shopping-cart-icon noselect">
          shopping_cart
        </span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log({state})
  return {
    currentPage: state.setPageState.currentPage,
  };
};

export default connect(mapStateToProps, { setCurrentPage })(Navigation);
