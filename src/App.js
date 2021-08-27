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
  return (
    <div className="App">
      <Navigation />
      <div
        className="viewport"
        style={{ height: window.innerHeight, maxHeight: window.innerHeight }}
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
