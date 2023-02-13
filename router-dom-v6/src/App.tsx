// 2 - structure reuse
import { Outlet } from "react-router-dom";

// 4 - navigating between pages

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
