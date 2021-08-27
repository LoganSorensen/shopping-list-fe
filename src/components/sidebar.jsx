import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";

import ShoppingList from "./shoppingList";
import AddItemForm from "./addItemForm";
import ItemDescription from "./itemDescription";

const Sidebar = ({ component }) => {
  // updates window.innerHeight on resize
  const useWindowSize = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
      function updateHeight() {
        setHeight(window.innerHeight);
      }
      window.addEventListener("resize", updateHeight);
      updateHeight();
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    return height;
  };

  return (
    <div
      className="sidebar"
      style={{ height: useWindowSize(), maxHeight: useWindowSize() }}
    >
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
