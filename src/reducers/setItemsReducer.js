import { SET_ITEM_DETAILS, ADD_TO_LIST } from "../actions/types";

const data = [
  {
    category: "Fruit and Vegetables",
    items: [
      {
        name: "avocado",
        note: "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. ",
        image:
          "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
      },
      { name: "banana", note: "banana desc", image: null },
      {
        name: "bunch of carrots 5pcs",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula lobortis, interdum mi nec, ornare mi. Phasellus molestie elit sed porta finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In a leo porttitor, dictum justo sit amet, ullamcorper lorem. Fusce placerat nisi a felis eleifend semper. Proin lacinia tellus eu lectus sagittis scelerisque. Maecenas neque velit, molestie id pulvinar interdum, tristique vel est. Aenean accumsan, lacus in molestie convallis, justo erat pellentesque leo, ac sagittis risus nulla vitae massa. Pellentesque id felis in lacus dignissim mollis id commodo turpis. In vel vulputate ipsum, quis facilisis orci. Vestibulum posuere enim arcu, et dapibus nunc elementum in. Sed et mi posuere purus cursus convallis eu in ex. Etiam vestibulum lorem aliquam massa varius, vel sagittis dui lacinia. Maecenas dictum quis ex ac aliquet. Duis tristique neque sit amet velit rutrum, non accumsan elit lacinia.",
        image: null,
      },
      { name: "chicken 1kg", note: "chicken desc", image: null },
      {
        name: "pre-cooked corn 450g",
        note: "corn desc",
        image: null,
      },
      {
        name: "mandarin nadorcott",
        note: "mandarin desc",
        image: null,
      },
      {
        name: "piele de sapo melon",
        note: "melon desc",
        image: null,
      },
      {
        name: "watermelon",
        note: "watermelon desc",
        image: null,
      },
    ],
  },
  {
    category: "Meat and Fish",
    items: [
      {
        name: "chicken leg box",
        note: "chicken desc",
        image: null,
      },
      { name: "chicken 1kg", note: "chicken desc", image: null },
      {
        name: "pork fillets 450g",
        note: "pork desc",
        image: null,
      },
      { name: "salmon 1kg", note: "salmon desc", image: null },
    ],
  },
];

const initialState = {
  items: data,
  categories: [],
  shoppingList: [],
  itemDetails: null,
};

export const setItems = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_DETAILS:
      return {
        ...state,
        itemDetails: action.payload,
      };
    case ADD_TO_LIST:
      // checks if a category matching the items exists already
      if (state.categories.includes(action.payload.category.toLowerCase())) {
        console.log("includes, adding");
        state.shoppingList.map((entry, index) => {
          // finds the entry in the list that matches the category
          if (
            entry.category.toLowerCase() ===
            action.payload.category.toLowerCase()
          ) {
            console.log(entry, state.shoppingList[index]);
            console.log("running if");
            return {
              ...state,
              shoppingList: [
                ...state.shoppingList,
                (state.shoppingList[index] = {
                  ...state.shoppingList[index],
                  items: [
                    ...state.shoppingList[index].items,
                    { name: action.payload.name, count: action.payload.count },
                  ],
                }),
              ],
            };
          }
          return null;
        });
        // if the category doesn't exist, creates a new entry for the category
      } else {
        console.log("doesn't include, creating a new one");
        return {
          ...state,
          categories: [
            ...state.categories,
            action.payload.category.toLowerCase(),
          ],
          shoppingList: [
            ...state.shoppingList,
            {
              category: action.payload.category,
              items: [
                { name: action.payload.name, count: action.payload.count },
              ],
            },
          ],
        };
      }
      return state;
    default:
      return state;
  }
};
