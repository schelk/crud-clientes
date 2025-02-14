import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Clientes from "./pages/Clientes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <div className="header-burger">
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          </div>
        </header>

        <Navbar showSidebar={showNav} />

        <div className={showNav ? "main-adjust" : "main"}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/clientes" element={<Clientes />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
