import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Item from "./item";

const ItemsList = ({ data }) => {
  const [numberOfColumns, setNumberOfColumns] = useState(3);

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

  return (
    <div className="items-list">
      {data.map((data, index) => {
        return (
          <div className="category" key={index}>
            <h3>{data.category}</h3>
            <div
              className="items"
              style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
            >
              {data.items.map((item, index) => (
                <Item key={index} item={item} />
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
  };
};

export default connect(mapStateToProps, {})(ItemsList);
