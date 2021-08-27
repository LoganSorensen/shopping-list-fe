import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../assets/logo.svg";
import {
  setCurrentPage,
  setSidebarComponent,
} from "../actions/setPageStateActions";

const Navigation = ({
  currentPage,
  setCurrentPage,
  setSidebarComponent,
  listLength,
}) => {
  const [badgeNum, setBadgeNum] = useState(listLength);

  useEffect(() => setBadgeNum(listLength), [listLength]);

  const toggleShoppingList = () => {
    setSidebarComponent("shoppingList");
    const sidebar = document.querySelector(".sidebar");

    if (window.innerWidth <= 768) {
      if (Array.from(sidebar.classList).includes("sidebar--open")) {
        sidebar.classList.remove("sidebar--open");
      } else {
        sidebar.classList.add("sidebar--open");
      }
    }
  };

  // updates window.innerHeight on resize
  const useWindowSize = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
      function updateHeight() {
        setHeight(window.innerHeight);
      }
      window.addEventListener("resize", updateHeight);
      updateHeight();
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    return height;
  };

  return (
    <div className="navigation" style={{ height: useWindowSize() }}>
      <Logo />
      <div className="nav-links">
        <Link to="/" className="nav-link" onClick={() => setCurrentPage("/")}>
          <div
            className={`${
              currentPage === "/" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="icon material-icons noselect">
            format_list_bulleted
          </span>

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
          <span className="icon material-icons noselect">replay</span>
          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>history</span>
          </div>
        </Link>
        {/* <Link
          to="/statistics"
          className="nav-link"
          onClick={() => setCurrentPage("/statistics")}
        > */}
        <div
          className={`${
            currentPage === "/statistics" ? "active" : ""
          } active-tab-indicator`}
        ></div>
        <span className="icon material-icons-outlined noselect">
          assessment
        </span>
        <div className="tooltip noselect">
          <div className="arrow-left"></div>
          <span>statistics</span>
        </div>
        {/* </Link> */}
      </div>
      <button className="shopping-list-btn" onClick={toggleShoppingList}>
        {badgeNum > 0 && <div className="badge">{badgeNum}</div>}
        <span className="icon material-icons-outlined shopping-cart-icon noselect">
          shopping_cart
        </span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.setPageState.currentPage,
    listLength: state.setItems.shoppingList.length,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setSidebarComponent,
})(Navigation);
