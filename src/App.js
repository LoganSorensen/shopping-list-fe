import { Route } from "react-router-dom";

import "./styles/index.css";

import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";
import ItemsPage from "./pages/itemsPage";
import HistoryPage from "./pages/historyPage";
import StatisticsPage from "./pages/statisticsPage";
import DeleteListModal from "./components/deleteListModal";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="viewport">
        <Route exact path="/" component={ItemsPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/statistics" component={StatisticsPage} />
      </div>
      <Sidebar />
      <DeleteListModal />
    </div>
  );
}

export default App;
