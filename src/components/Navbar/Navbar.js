import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const toggleMenu = () => {
    const MenuItems = document.querySelector(".menu-items");
    MenuItems.classList.toggle("open");
  };

  const closeMenu = () =>{
    const MenuItems = document.querySelector(".menu-items")
    if(MenuItems.classList.contains("open")){
      MenuItems.classList.remove('open')
    }

  }

  return (
    <header>
      <div className="navbar-container">
        <Link to="/" className="no-decoration">
          <h1>WatchList</h1>
        </Link>
        <div className="navbar-right">
          <MenuIcon className="menu-icon" onClick={toggleMenu} />
          <div className="menu-items">
            <span>
              {" "}
              <Link to="/watchlist" className="no-decoration" onClick={closeMenu} >Watchlist </Link>
            </span>
            <Link to="/watched" className="no-decoration" onClick={closeMenu}>
              <span>Watched</span>
            </Link>
            <Link to="/" className="no-decoration" onClick={closeMenu}>
              <button className="add">
                {" "}
                <strong>+ADD</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
