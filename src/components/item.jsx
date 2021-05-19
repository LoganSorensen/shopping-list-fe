import React from "react";
import { connect } from "react-redux";

import { setItemDetails } from "../actions/setItemsActions";
import { setSidebarComponent } from "../actions/setPageStateActions";

const Item = ({ item, category, setItemDetails, setSidebarComponent }) => {
  const handleClick = () => {
    setSidebarComponent("itemDescription");
    setItemDetails({
      category: category,
      name: item.name,
      note: item.note,
      image: item.image,
    });
  };

  return (
    <div className="item noselect" onClick={handleClick}>
      {item.name}
      <span className="material-icons">add</span>
    </div>
  );
};

export default connect(null, { setItemDetails, setSidebarComponent })(Item);


