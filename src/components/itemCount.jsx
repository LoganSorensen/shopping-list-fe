import React, { useState } from "react";
import { connect } from "react-redux";

import { removeFromList, setCount } from "../actions/setItemsActions";

const ItemCount = ({ item, removeFromList, setCount, editable }) => {
  const [itemCount, setItemCount] = useState(item.count);

  const changeCount = (e) => {
    if (e.target.textContent === "add") {
      setItemCount(itemCount + 1);
      setCount({
        _id: item._id,
        value: 1,
      });
    } else if (e.target.textContent === "remove" && itemCount > 1) {
      setItemCount(itemCount - 1);
      setCount({
        _id: item._id,
        value: -1,
      });
    }
  };

  const closeItemCount = () => {
    const itemCountArr = Array.from(document.querySelectorAll(".item-count"));
    itemCountArr.forEach((itemCount) =>
      itemCount.classList.remove("item-count--active")
    );
  };

  const toggleActive = (e) => {
    if (!editable) return;
    const parentEl = e.currentTarget.parentElement;
    parentEl.classList.toggle("item-count--active");
  };

  const removeItem = () => {
    removeFromList(item);
    closeItemCount();
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget))
      e.currentTarget.classList.remove("item-count--active");
  };

  return (
    <div className="item-count" onBlur={handleBlur}>
      <button className="delete-item-btn" onClick={removeItem}>
        <span className="material-icons-outlined">delete</span>
      </button>
      <button className="change-count-btn" onClick={changeCount}>
        <span className="material-icons-outlined icon">remove</span>
      </button>
      <button
        className="count-btn"
        style={{ cursor: editable ? "pointer" : "auto" }}
        onClick={toggleActive}
      >
        <span className="count-number">{itemCount}</span>pcs
      </button>
      <button className="change-count-btn" onClick={changeCount}>
        <span className="material-icons-outlined icon">add</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editable: state.setPageState.shoppingListEditable,
  };
};

export default connect(mapStateToProps, { removeFromList, setCount })(
  ItemCount
);
