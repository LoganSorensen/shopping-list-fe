import React from "react";
import { connect } from "react-redux";

import ItemCount from "./itemCount";
import Checkbox from "./checkbox";
import { toggleItemCompleted } from "../actions/setShoppingListActions";

const ItemList = ({
  categories,
  list,
  name,
  editable,
  toggleItemCompleted,
}) => {
  const toggleCompleted = (item) => {
    toggleItemCompleted(item.id);
  };

  // console.log(list)

  return (
    <>
      <div className="shopping-list-header">
        <h2>{name}</h2>
        <span className="material-icons">edit</span>
      </div>
      <div className="item-list">
        {categories.map((category, index) => {
          return (
            <div className="list-category" key={index}>
              <h3>{category}</h3>
              {list.map((item, index) => {
                if (item.category === category) {
                  return (
                    <div className="list-item" key={index}>
                      <div>
                        {!editable && (
                          <Checkbox
                            completed={item.completed}
                            toggleCompleted={() => toggleCompleted(item)}
                          />
                        )}
                        <p
                          style={{
                            textDecoration: item.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {item.name}
                        </p>
                      </div>
                      <ItemCount item={item} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.setItems.categories,
    // list: state.setItems.shoppingList,
    name: state.setShoppingList.listName,
    editable: state.setPageState.shoppingListEditable,
  };
};

export default connect(mapStateToProps, { toggleItemCompleted })(ItemList);
