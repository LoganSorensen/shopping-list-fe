import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import ItemSearch from "../components/itemSearch";
import ItemsList from "../components/itemsList";
import { setInitialState } from "../actions/setItemsActions";

const ItemsPage = ({ setInitialState }) => {
  useEffect(() => {
    axios
      .get("https://lsorensen-shopping-list.herokuapp.com/items")
      .then((res) => {
        setInitialState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setInitialState]);

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

export default connect(null, { setInitialState })(ItemsPage);
