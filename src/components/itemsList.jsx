import React, { useState, useEffect } from "react";

import Item from "./item";

const ItemsList = () => {
  const [numberOfColumns, setNumberOfColumns] = useState(3);
  const data = [
    {
      category: "Fruit and Vegetables",
      items: [
        { name: "avocado", description: "avocado desc", image: "test img" },
        { name: "banana", description: "banana desc", image: "test img" },
        {
          name: "bunch of carrots 5pcs",
          description: "carrots desc",
          image: "test img",
        },
        { name: "chicken 1kg", description: "chicken desc", image: "test img" },
        {
          name: "pre-cooked corn 450g",
          description: "corn desc",
          image: "test img",
        },
        {
          name: "mandarin nadorcott",
          description: "mandarin desc",
          image: "test img",
        },
        {
          name: "piele de sapo melon",
          description: "melon desc",
          image: "test img",
        },
        {
          name: "watermelon",
          description: "watermelon desc",
          image: "test img",
        },
      ],
    },
    {
      category: "Meat and Fish",
      items: [
        {
          name: "chicken leg box",
          description: "chicken desc",
          image: "test img",
        },
        { name: "chicken 1kg", description: "chicken desc", image: "test img" },
        {
          name: "pork fillets 450g",
          description: "pork desc",
          image: "test img",
        },
        { name: "salmon 1kg", description: "salmon desc", image: "test img" },
      ],
    },
  ];

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

export default ItemsList;
