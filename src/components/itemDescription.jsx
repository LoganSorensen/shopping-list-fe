import React from "react";
import { connect } from "react-redux";

import { setSidebarComponent } from "../actions/setPageStateActions";
import { addToList, deleteItem } from "../actions/setItemsActions";

const ItemDescription = ({
  setSidebarComponent,
  item,
  addToList,
  deleteItem,
}) => {
  const changeSidebarComponent = () => {
    setSidebarComponent("shoppingList");
  };

  const removeItem = () => {
    deleteItem(item);
    changeSidebarComponent();
  };

  const addItemToList = () => {
    addToList({ ...item, count: 1 });
    changeSidebarComponent();
  };

  return (
    <>
      {item && (
        <div className="item-description">
          <button className="back-btn" onClick={changeSidebarComponent}>
            <span className="material-icons-outlined">arrow_right_alt</span>back
          </button>
          <div className="img-wrapper">
            {item.image ? (
              <img src={item.image} alt={item.name} />
            ) : (
              <span>No image available</span>
            )}
          </div>
          <span className="detail-name">name</span>
          <p className="item-name">{item.name}</p>
          <span className="detail-name">category</span>
          <p className="item-category">{item.category}</p>
          {item.note && (
            <>
              <span className="detail-name">note</span>
              <p className="item-note">{item.note}</p>
            </>
          )}
          <div className="btns">
            <button className="delete-btn" onClick={removeItem}>
              delete
            </button>
            <button className="add-btn" onClick={addItemToList}>
              Add to list
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.setItems.itemDetails,
  };
};

export default connect(mapStateToProps, {
  setSidebarComponent,
  addToList,
  deleteItem,
})(ItemDescription);
