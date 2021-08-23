import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Item from "./item";

const ItemsList = ({ items, query, categories }) => {
  const [numberOfColumns, setNumberOfColumns] = useState(3);
  const [displayItems, setDisplayItems] = useState(items);
  const [displayCategories, setDisplayCategories] = useState(categories);

  const determineColumnWidth = () => {
    const viewport = document.querySelector(".viewport");
    const width = viewport.offsetWidth;
    // console.log(width)
    setNumberOfColumns(Math.round(width / 200 - 1));
  };

  // calculates the number of columns in the grid whenever the window is resized
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      determineColumnWidth();
    }, 500);
  });

  useEffect(() => {
    determineColumnWidth();
  }, []);

  const getCategories = () => {
    const filteredCategories = [];
    items.map((item) => {
      if (!filteredCategories.includes(item.category))
        filteredCategories.push(item.category);
      return null;
    });
    setDisplayCategories(filteredCategories);
  };

  useEffect(() => {
    // checks for items that match the search term
    if (query) {
      const filteredData = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      const filteredCategories = [];

      // populates a new array with all the categories in the filtered data
      filteredData.map((data) => {
        if (!filteredCategories.includes(data.category))
          filteredCategories.push(data.category);
        return null;
      });

      setDisplayItems(filteredData);
      setDisplayCategories(filteredCategories);
    } else {
      // resets the local state if there is no query
      setDisplayItems(items);
      getCategories();
    }
    // eslint-disable-next-line
  }, [query, items, categories]);

  return (
    <div className="items-list">
      {displayCategories.map((category, index) => {
        return (
          <div className="category" key={index}>
            <h3>{category}</h3>
            <div
              className="items"
              style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
            >
              {displayItems.map((item, index) => {
                if (item.category === category) {
                  return <Item key={index} item={item} />;
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.setItems.allCategories,
    items: state.setItems.items,
    query: state.setItems.query,
  };
};

export default connect(mapStateToProps, {})(ItemsList);
