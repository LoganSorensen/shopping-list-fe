import React, { useState } from "react";

import ShoppingList from "./shoppingList";

const Sidebar = () => {
  const [component, setComponent] = useState("list");

  return (
    <div className="sidebar">{component === "list" && <ShoppingList />}</div>
  );
};

export default Sidebar;
