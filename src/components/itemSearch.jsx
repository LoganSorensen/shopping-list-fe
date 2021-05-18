import React, { useState } from "react";

const ItemSearch = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="item-search">
      <span className="material-icons">search</span>
      <input
        type="text"
        placeholder="search items"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default ItemSearch;
