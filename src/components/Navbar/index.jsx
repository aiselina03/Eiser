import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { SearchContext } from "../../context/searchContext";
import "./style.scss";

function Navbar() {
  const { basket } = useContext(BasketContext);
  const { searchInp, handleInput } = useContext(SearchContext);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp"
              alt=""
            />
          </Link>
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
          <NavLink to={"/basket"}>
          <i class="fa-regular fa-cart-shopping"></i>
            <sup>{basket.length ? basket.length : "0"}</sup>
          </NavLink>
          <NavLink to={"/wishlist"}>
            <i class="fa-regular fa-heart "></i>
          </NavLink>
          <div className="search">
            <i class="fa-regular fa-magnifying-glass fa-fw"></i>
            <input type="text" placeholder="Search for products..." value={searchInp} onChange={handleInput} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
