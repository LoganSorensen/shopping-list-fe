import React from "react";
import { connect } from "react-redux";

import { setItemDetails, addToList } from "../actions/setItemsActions";
import { setSidebarComponent } from "../actions/setPageStateActions";

const Item = ({ item, setItemDetails, setSidebarComponent, addToList }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("material-icons")) return;
    setSidebarComponent("itemDescription");
    setItemDetails(item);
  };

  const addItemToList = () => {
    addToList({
      id: item.id,
      category: item.category,
      name: item.name,
      count: 1,
    });
  };

  return (
    <div className="item noselect" onClick={handleClick}>
      {item.name}
      <span className="material-icons" onClick={addItemToList}>
        add
      </span>
    </div>
  );
};

export default connect(null, {
  setItemDetails,
  setSidebarComponent,
  addToList,
})(Item);
