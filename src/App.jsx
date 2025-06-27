import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Home/Home";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}

export default App;
