import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Item from "./item";

const ItemsList = ({ data, query }) => {
  const [numberOfColumns, setNumberOfColumns] = useState(3);
  const [displayItems, setDisplayItems] = useState(data);

  const determineColumnWidth = () => {
    const viewport = document.querySelector(".viewport");
    const width = viewport.offsetWidth;
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

  useEffect(() => {
    // checks for items that match the search term
    if (query) {
      const filteredData = data.map((data) => {
        return {
          category: data.category,
          items: data.items.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          ),
        };
      });

      setDisplayItems(filteredData);
    } else {
      setDisplayItems(data);
    }
  }, [query, data]);

  return (
    <div className="items-list">
      {displayItems.map((data, index) => {
        return (
          <div className="category" key={index}>
            {data.items.length > 0 && <h3>{data.category}</h3>}
            <div
              className="items"
              style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
            >
              {data.items.map((item, index) => (
                <Item key={index} item={item} category={data.category} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.setItems.items,
    query: state.setItems.query,
  };
};

export default connect(mapStateToProps, {})(ItemsList);
