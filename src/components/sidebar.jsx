import React from "react";
import { connect } from "react-redux";

import ShoppingList from "./shoppingList";
import AddItemForm from "./addItemForm";
import ItemDescription from "./itemDescription";

const Sidebar = ({ component }) => {
  return (
    <div className="sidebar">
      {component === "shoppingList" && <ShoppingList />}
      {component === "addItem" && <AddItemForm />}
      {component === "itemDescription" && <ItemDescription />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    component: state.setPageState.sidebarComponent,
  };
};

export default connect(mapStateToProps, {})(Sidebar);
