import React from "react";
import { connect } from "react-redux";

import { setItemDetails, addToList } from "../actions/setItemsActions";
import { setSidebarComponent } from "../actions/setPageStateActions";

const Item = ({
  item,
  category,
  setItemDetails,
  setSidebarComponent,
  addToList,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("material-icons")) return;
    setSidebarComponent("itemDescription");
    setItemDetails({
      category: category,
      name: item.name,
      note: item.note,
      image: item.image,
    });
  };

  const addItemToList = () => {
    addToList({ category: category, name: item.name, count: 1 });
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
