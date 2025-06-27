import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Shared/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
