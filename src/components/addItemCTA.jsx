import React from "react";
import { connect } from "react-redux";

import { ReactComponent as BottleSVG } from "../assets/source.svg";
import { setSidebarComponent } from "../actions/setPageStateActions";

const AddItemCTA = ({ setSidebarComponent }) => {
  const addItem = () => {
    setSidebarComponent("addItem");
  };

  return (
    <div className="add-item-cta">
      <BottleSVG />
      <div>
        <p>Can't find what you need?</p>
        <button onClick={addItem}>Add item</button>
      </div>
    </div>
  );
};

export default connect(null, { setSidebarComponent })(AddItemCTA);
