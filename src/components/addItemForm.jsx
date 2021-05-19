import React, { useState } from "react";
import { connect } from "react-redux";

import { setSidebarComponent } from "../actions/setPageStateActions";

const AddItemForm = ({ setSidebarComponent }) => {
  const [item, setItem] = useState({
    name: "",
    note: "",
    image: "",
    category: "",
  });

  const handleFocus = (e) => e.currentTarget.classList.add("field--focused");

  const handleBlur = (e) => e.currentTargetclassList.remove("field--focused");

  const clearField = (field) => setItem({ ...item, [field]: "" });

  const handleChange = (e) =>
    setItem({ ...item, [e.target.name]: e.target.value });

  const resetForm = () =>
    setItem({ name: "", note: "", image: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    resetForm();
  };

  const handleCancel = () => {
    setSidebarComponent("shoppingList");
    resetForm();
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <div className="fields">
        <h2>Add a new item</h2>
        <div className="field" onFocus={handleFocus} onBlur={handleBlur}>
          <label htmlFor="name">Name</label>
          <div id="name">
            <input
              type="text"
              placeholder="Enter a name"
              name="name"
              value={item.name}
              onChange={handleChange}
            />
            <span
              className="material-icons-outlined noselect"
              tabIndex="0"
              style={{ display: item.name ? "block" : "none" }}
              onClick={() => clearField("name")}
            >
              close
            </span>
          </div>
        </div>
        <div className="field" onFocus={handleFocus} onBlur={handleBlur}>
          <label htmlFor="note">Note (optional)</label>
          <div id="note">
            <textarea
              placeholder="Enter a note"
              name="note"
              value={item.note}
              onChange={handleChange}
            ></textarea>
            <span
              className="material-icons-outlined noselect"
              tabIndex="0"
              style={{ display: item.note ? "block" : "none" }}
              onClick={() => clearField("note")}
            >
              close
            </span>
          </div>
        </div>
        <div className="field" onFocus={handleFocus} onBlur={handleBlur}>
          <label htmlFor="image">Image (optional)</label>
          <div id="image">
            <input
              type="text"
              placeholder="Enter a url"
              name="image"
              value={item.image}
              onChange={handleChange}
            />
            <span
              className="material-icons-outlined noselect"
              tabIndex="0"
              style={{ display: item.image ? "block" : "none" }}
              onClick={() => clearField("image")}
            >
              close
            </span>
          </div>
        </div>
        <div className="field" onFocus={handleFocus} onBlur={handleBlur}>
          <label htmlFor="category">Category</label>
          <div id="category">
            <input
              type="text"
              placeholder="Enter a category"
              name="category"
              value={item.category}
              onChange={handleChange}
            />
            <span
              className="material-icons-outlined noselect"
              tabIndex="0"
              style={{ display: item.category ? "block" : "none" }}
              onClick={() => clearField("category")}
            >
              close
            </span>
          </div>
        </div>
      </div>
      <div className="form-btns">
        <button type="reset" className="cancel-btn" onClick={handleCancel}>
          cancel
        </button>
        <button type="submit" className="save-btn">
          Save
        </button>
      </div>
    </form>
  );
};

export default connect(null, { setSidebarComponent })(AddItemForm);
