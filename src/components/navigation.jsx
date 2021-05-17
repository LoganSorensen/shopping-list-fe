import React, { useState } from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("items");

  return (
    <div className="navigation">
      <Logo />

      <div className="nav-links">
        <div className="nav-link">
          <div
            className={`${
              activeTab === "items" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="material-icons noselect">format_list_bulleted</span>

          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>items</span>
          </div>
        </div>

        <div className="nav-link">
          <div
            className={`${
              activeTab === "history" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="material-icons noselect">replay</span>

          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>history</span>
          </div>
        </div>

        <div className="nav-link">
          <div
            className={`${
              activeTab === "statistics" ? "active" : ""
            } active-tab-indicator`}
          ></div>
          <span className="material-icons-outlined noselect">assessment</span>

          <div className="tooltip noselect">
            <div className="arrow-left"></div>
            <span>statistics</span>
          </div>
        </div>
      </div>

      <button className="shopping-list-btn">
        <span className="material-icons-outlined shopping-cart-icon noselect">
          shopping_cart
        </span>
      </button>
    </div>
  );
};

export default Navigation;
