import React from "react";
import { connect } from "react-redux";

import { ReactComponent as BottleSVG } from "../assets/source.svg";
import { ReactComponent as ShoppingSVG } from "../assets/undraw_shopping_app_flsj_1.svg";
import { setSidebarComponent } from "../actions/setPageStateActions";
import ItemCount from "./itemCount";

const ShoppingList = ({ setSidebarComponent, list, categories }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addItem = () => {
    setSidebarComponent("addItem");
  };

  const saveList = () => {
    console.log("saving");
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

      <div
        className={`save-list-form ${list.length > 0 ? "" : "form--disabled"}`}
      >
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a name" />
          <button onClick={saveList}>Save</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.setItems.categories,
    list: state.setItems.shoppingList,
  };
};

export default connect(mapStateToProps, { setSidebarComponent })(ShoppingList);
