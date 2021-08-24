export const historyData = {
  dates: ["August 2020", "July 2020"],
  lists: [
    {
      id: 1,
      name: "Grocery List",
      month: "August 2020",
      date: ["1", "8", "27", "2020"],
      status: "completed",
      list: [],
    },
    {
      id: 2,
      name: "Richard's party",
      month: "August 2020",
      date: ["1", "8", "24", "2020"],
      status: "completed",
      list: {
        categories: ["Cookies", "Beverages"],
        items: [
          { category: "Cookies", name: "Cookies Chocolate", count: 3 },
          { category: "Cookies", name: "Doris Truffle", count: 1 },
          { category: "Beverages", name: "Soft drink 1.5L", count: 2 },
          { category: "Beverages", name: "Beer", count: 8 },
          { category: "Beverages", name: "Cider", count: 6 },
        ],
      },
    },
    {
      id: 3,
      name: "Board Game Night",
      month: "July 2020",
      date: ["1", "7", "27", "2020"],
      status: "completed",
      list: [],
    },
    {
      id: 4,
      name: "Grocery List",
      month: "July 2020",
      date: ["1", "7", "16", "2020"],
      status: "cancelled",
      list: [],
    },
  ],
};
