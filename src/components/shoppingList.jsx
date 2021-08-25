import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { ReactComponent as ShoppingSVG } from "../assets/undraw_shopping_app_flsj_1.svg";
import { setShoppingListEditable } from "../actions/setPageStateActions";
import {
  setShoppingList,
  cancelList,
  cancelShoppingList,
} from "../actions/setShoppingListActions";

import AddItemCTA from "./addItemCTA";
import ItemList from "./itemList";

const ShoppingList = ({
  setShoppingList,
  setShoppingListEditable,
  cancelList,
  cancelShoppingList,
  list,
  items,
  editable,
  listId,
}) => {
  const [listName, setListName] = useState("");

  const handleChange = (e) => {
    setListName(e.target.value);
  };

  const saveList = (e) => {
    e.preventDefault();
    const items = list.map((item) => {
      return { ...item, completed: false };
    });

    const categories = [];
    list.map((item) => {
      if (!categories.includes(item.category)) categories.push(item.category);
      return null;
    });

    setShoppingList({ items: items, name: listName, categories: categories });
    setShoppingListEditable();
    setListName("");
  };

  const openModal = () => {
    const modal = document.querySelector(".delete-list-modal");
    const bodyBlackout = document.querySelector(".body-blackout");
    modal.style.display = "flex";
    bodyBlackout.style.display = "block";
  };

  const completeList = () => {
    axios
      .put(`http://localhost:5000/lists/${listId}`, { completed: true })
      .then(() => {
        cancelList();
        cancelShoppingList();
        setShoppingListEditable();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="shopping-list">
      <AddItemCTA />
      {list.length < 1 ? (
        <>
          <div className="no-items">No items</div>
          <ShoppingSVG className="shopping-svg" />
        </>
      ) : items.length === 0 ? (
        <ItemList list={list} />
      ) : (
        <ItemList list={items} />
      )}

      {editable ? (
        <div
          className={`list-options ${list.length > 0 ? "" : "form--disabled"}`}
        >
          <form onSubmit={saveList}>
            <input
              type="text"
              placeholder="Enter a name"
              value={listName}
              onChange={handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      ) : (
        <div className="list-options list-btns">
          <button className="cancel-btn" onClick={openModal}>
            cancel
          </button>
          <button className="complete-btn" onClick={completeList}>
            Complete
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listId: state.setShoppingList.listId,
    items: state.setShoppingList.items,
    list: state.setItems.shoppingList,
    editable: state.setPageState.shoppingListEditable,
  };
};

export default connect(mapStateToProps, {
  setShoppingList,
  setShoppingListEditable,
  cancelShoppingList,
  cancelList,
})(ShoppingList);
