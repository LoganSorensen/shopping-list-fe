import React, { useState } from "react";
import { connect } from "react-redux";

import { ReactComponent as BottleSVG } from "../assets/source.svg";
import { ReactComponent as ShoppingSVG } from "../assets/undraw_shopping_app_flsj_1.svg";
import {
  setSidebarComponent,
  setShoppingListEditable,
} from "../actions/setPageStateActions";
import { setShoppingList } from "../actions/setShoppingListActions";
import ItemCount from "./itemCount";

const ShoppingList = ({
  setSidebarComponent,
  setShoppingList,
  setShoppingListEditable,
  list,
  categories,
  name,
  editable,
}) => {
  const [listName, setListName] = useState("");

  const addItem = () => {
    setSidebarComponent("addItem");
  };

  const handleChange = (e) => {
    setListName(e.target.value);
  };

  const saveList = (e) => {
    e.preventDefault();
    setShoppingList({ items: list, listName: listName });
    setShoppingListEditable();
  };

  const openModal = () => {
    const modal = document.querySelector(".delete-list-modal");
    const bodyBlackout = document.querySelector(".body-blackout");
    modal.style.display = "block";
    bodyBlackout.style.display = "block";
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
      {list.length < 1 ? (
        <>
          <div className="no-items">No items</div>
          <ShoppingSVG className="shopping-svg" />
        </>
      ) : (
        <div className="item-list">
          <div className="shopping-list-header">
            <h2>{name}</h2>
            <span className="material-icons">edit</span>
          </div>
          {categories.map((category, index) => {
            return (
              <div className="list-category" key={index}>
                <h3>{category}</h3>
                {list.map((item, index) => {
                  if (item.category === category) {
                    return (
                      <div className="list-item" key={index}>
                        <p>{item.name}</p>
                        <ItemCount item={item} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            );
          })}
        </div>
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
          <button className="complete-btn">Complete</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.setItems.categories,
    list: state.setItems.shoppingList,
    name: state.setShoppingList.listName,
    editable: state.setPageState.shoppingListEditable,
  };
};

export default connect(mapStateToProps, {
  setSidebarComponent,
  setShoppingList,
  setShoppingListEditable,
})(ShoppingList);
