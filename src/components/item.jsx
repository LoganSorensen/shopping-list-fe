import React from "react";
import { connect } from "react-redux";

import { setItemDetails, addToList } from "../actions/setItemsActions";
import { setSidebarComponent } from "../actions/setPageStateActions";

const Item = ({
  item,
  setItemDetails,
  setSidebarComponent,
  addToList,
  editable,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("material-icons")) return;
    setSidebarComponent("itemDescription");
    setItemDetails(item);

    const sidebar = document.querySelector(".sidebar");

    if (window.innerWidth <= 768) {
      if (Array.from(sidebar.classList).includes("sidebar--open")) {
        sidebar.classList.remove("sidebar--open");
      } else {
        sidebar.classList.add("sidebar--open");
      }
    }
  };

  const addItemToList = () => {
    // prevents new items from being added to the list after editing is done
    if (!editable) return;
    setSidebarComponent("shoppingList");
    addToList({
      _id: item._id,
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

const mapStateToProps = (state) => {
  return {
    editable: state.setPageState.shoppingListEditable,
  };
};

export default connect(mapStateToProps, {
  setItemDetails,
  setSidebarComponent,
  addToList,
})(Item);
