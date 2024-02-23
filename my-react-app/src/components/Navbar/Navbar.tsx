import React from "react";
import "./Navbar.css";
import Cart from "../Cart/Cart";

type NavbarProps = {
  totQuantity: number;
  price: number;
};

const Navbar = ({ totQuantity, price }: NavbarProps) => {
  return (
    <div className="nav-margin">
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href={"/"}>
            My shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href={"/"}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/"}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/"}>
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <Cart totQuantity={totQuantity} price={price} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;