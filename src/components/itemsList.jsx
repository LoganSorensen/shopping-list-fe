import React from "react";

import Item from "./item";

const ItemsList = () => {
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

  return (
    <div className="items-list">
      {data.map((data) => {
        console.log(data.items);
        return (
          <div className="category">
            <h3>{data.category}</h3>
            <div className="items">
              {data.items.map((item) => (
                <Item item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
