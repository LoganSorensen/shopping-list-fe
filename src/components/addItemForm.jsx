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
  const categories = ["Fruit and Vegetables", "Meat and Fish", "Beverages"];

  const handleFocus = (e) => {
    const categoryList = document.querySelector(".category-list");
    if (e.currentTarget.contains(categoryList))
      categoryList.style.display = "flex";

    e.currentTarget.classList.add("field--focused");
  };

  const handleBlur = (e) => {
    const categoryList = document.querySelector(".category-list");

    if (!e.currentTarget.contains(e.relatedTarget)) {
      categoryList.style.display = "none";
    }
    e.currentTarget.classList.remove("field--focused");
  };

  const clearField = (field) => setItem({ ...item, [field]: "" });

  const handleChange = (e) =>
    setItem({ ...item, [e.target.name]: e.target.value });

  const setCategory = (e) => {
    setItem({ ...item, category: e.target.textContent });
  };

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
    <form
      className="add-item-form"
      onSubmit={handleSubmit}
      autoComplete={"off"}
    >
      <div className="fields">
        <h2>Add a new item</h2>
        <div className="field" onFocus={handleFocus} onBlur={handleBlur}>
          <label htmlFor="name">Name</label>
          <div id="name" className="input-wrapper">
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
          <div id="note" className="input-wrapper">
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
          <div id="image" className="input-wrapper">
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

        <div
          className="field category-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <label htmlFor="category">Category</label>
          <div id="category" className="input-wrapper">
            <input
              id="category-input"
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
          <div className="category-list">
            {categories.map((category, index) => (
              <button
                type="button"
                value={category}
                key={index}
                onClick={setCategory}
              >
                {category}
              </button>
            ))}
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
