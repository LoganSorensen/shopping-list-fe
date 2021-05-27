import React from "react";
import { connect } from "react-redux";

import {
  cancelShoppingList,
  cancelList,
} from "../actions/setShoppingListActions";
import { setShoppingListEditable } from "../actions/setPageStateActions";

const DeleteListModal = ({
  cancelShoppingList,
  setShoppingListEditable,
  cancelList,
}) => {
  const closeModal = () => {
    const modal = document.querySelector(".delete-list-modal");
    const bodyBlackout = document.querySelector(".body-blackout");
    modal.style.display = "none";
    bodyBlackout.style.display = "none";
  };

  const deleteList = () => {
    cancelList();
    cancelShoppingList();
    setShoppingListEditable();
    closeModal();
  };

  return (
    <div className="delete-list-modal">
      <button className="close-btn">
        <span className="material-icons-outlined" onClick={closeModal}>
          close
        </span>
      </button>
      <p>Are you sure that you want to cancel this list?</p>
      <div className="btns">
        <button className="cancel-btn" onClick={closeModal}>
          cancel
        </button>
        <button className="delete-btn" onClick={deleteList}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default connect(null, {
  cancelShoppingList,
  setShoppingListEditable,
  cancelList,
})(DeleteListModal);
