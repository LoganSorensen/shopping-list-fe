import React, { useState } from "react";
import { connect } from "react-redux";

import { ReactComponent as BottleSVG } from "../assets/source.svg";
import { ReactComponent as ShoppingSVG } from "../assets/undraw_shopping_app_flsj_1.svg";
import { setSidebarComponent } from "../actions/setPageStateActions";

const ShoppingList = ({ setSidebarComponent }) => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addItem = () => {
    setSidebarComponent("addItem");
  };

  return (
    <div className="shopping-list">
      <div className="add-item-cta">
        <BottleSVG />
        <div>
          <p>Can't find what you need?</p>
          <button onClick={addItem}>Add item</button>
        </div>
      </div>

      {items.length < 1 && (
        <>
          <div className="no-items">No items</div>
          <ShoppingSVG className="shopping-svg" />
        </>
      )}

      <div className="add-list-item-form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a name" />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { setSidebarComponent })(ShoppingList);
