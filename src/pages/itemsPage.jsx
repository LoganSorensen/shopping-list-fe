import React from "react";

import ItemSearch from "../components/itemSearch";
import ItemsList from '../components/itemsList';

const ItemsPage = () => {
  return (
    <div className="items-page">
      <header>
        <h2>
          <span className="highlight">Shoppingify </span>allows you to take your
          shopping list wherever you go
        </h2>
        <ItemSearch />
      </header>
      <ItemsList />
    </div>
  );
};

export default ItemsPage;
