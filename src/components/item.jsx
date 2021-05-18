import React from "react";

const Item = ({ item }) => {
//   console.log(item);

    const getWidth = () => {
       const viewport = document.querySelector('.viewport')
       console.log(viewport.offsetWidth)
    }

  return (
    <div className="item noselect" onClick={getWidth}>
      {item.name}
      <span className="material-icons">add</span>
    </div>
  );
};

export default Item;
