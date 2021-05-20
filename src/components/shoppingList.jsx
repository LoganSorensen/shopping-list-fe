import React from "react";
import { connect } from "react-redux";

import { ReactComponent as BottleSVG } from "../assets/source.svg";
import { ReactComponent as ShoppingSVG } from "../assets/undraw_shopping_app_flsj_1.svg";
import { setSidebarComponent } from "../actions/setPageStateActions";
import ItemCount from "./itemCount";

const ShoppingList = ({ setSidebarComponent, list }) => {
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

      {list.length < 1 ? (
        <>
          <div className="no-items">No items</div>
          <ShoppingSVG className="shopping-svg" />
        </>
      ) : (
        <div className="item-list">
          {list.map((entry, index) => {
            // console.log(entry);
            return (
              <div className="list-category" key={index}>
                <h3>{entry.category}</h3>
                {entry.items.map((item, index) => {
                  return (
                    <div className="list-item" key={index}>
                      <p>{item.name}</p>
                      <ItemCount count={item.count} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
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

const mapStateToProps = (state) => {
  return {
    list: state.setItems.shoppingList,
  };
};

export default connect(mapStateToProps, { setSidebarComponent })(ShoppingList);
