import "./styles/index.css";

import Navigation from "./components/navigation";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="viewport"></div>
      <SideBar />
    </div>
  );
}

export default App;
