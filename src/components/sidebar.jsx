import React from "react";
import { connect } from "react-redux";

import ShoppingList from "./shoppingList";
import AddItemForm from "./addItemForm";

const Sidebar = ({ component }) => {
  return (
    <div className="sidebar">
      {component === "shoppingList" && <ShoppingList />}
      {component === "addItem" && <AddItemForm />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    component: state.setPageState.sidebarComponent,
  };
};

export default connect(mapStateToProps, {})(Sidebar);
