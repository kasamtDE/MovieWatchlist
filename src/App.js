import Navbar from "./components/Navbar/Navbar";
import Resultcard from "./components/Resultcard/Resultcard";
import Search from "./components/Search/Search";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Watched from "./components/Watched/Watched";
import Watchlist from "./components/Watchlist/Watchlist";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
