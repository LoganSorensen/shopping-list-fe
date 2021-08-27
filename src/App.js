import { useState, useLayoutEffect } from "react";
import { Route } from "react-router-dom";

import "./styles/index.css";

import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";
import ItemsPage from "./pages/itemsPage";
import HistoryPage from "./pages/historyPage";
import HistoryListPage from "./pages/historyListPage";
import StatisticsPage from "./pages/statisticsPage";
import DeleteListModal from "./components/deleteListModal";

function App() {
  // updates window.innerHeight on resize
  const useWindowSize = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
      function updateHeight() {
        setHeight(window.innerHeight);
      }
      window.addEventListener("resize", updateHeight);
      updateHeight();
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    return height;
  };

  return (
    <div className="App">
      <Navigation />
      <div
        className="viewport"
        style={{ height: useWindowSize(), maxHeight: useWindowSize() }}
      >
        <Route exact path="/">
          <ItemsPage />
        </Route>
        <Route exact path="/history" component={HistoryPage} />
        <Route path="/history/:id" component={HistoryListPage} />
        <Route path="/statistics" component={StatisticsPage} />
      </div>
      <Sidebar />
      <DeleteListModal />
    </div>
  );
}

export default App;
