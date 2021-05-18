import React, { useState } from "react";

import { ReactComponent as BottleSVG } from "../assets/source.svg";
import { ReactComponent as ShoppingSVG } from "../assets/undraw_shopping_app_flsj_1.svg";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="shopping-list">
      <div className="add-item-cta">
        <BottleSVG />
        <div>
          <p>Didn't find what you need?</p>
          <button>Add item</button>
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

export default ShoppingList;
