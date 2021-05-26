import React from "react";

const DeleteListModal = () => {
  const closeModal = () => {
    const modal = document.querySelector(".delete-list-modal");
    const bodyBlackout = document.querySelector(".body-blackout");
    modal.style.display = "none";
    bodyBlackout.style.display = "none";
  };

  const deleteList = () => {};

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

export default DeleteListModal;
