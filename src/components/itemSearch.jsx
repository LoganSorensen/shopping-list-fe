import React from "react";
import { connect } from "react-redux";

import { setQuery } from "../actions/setItemsActions";

const ItemSearch = ({ setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="item-search">
      <span className="material-icons">search</span>
      <input type="text" placeholder="search items" onChange={handleChange} />
    </form>
  );
};

export default connect(null, { setQuery })(ItemSearch);
