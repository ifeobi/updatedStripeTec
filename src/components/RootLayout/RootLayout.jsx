import React from "react";
import "./RootLayout.scss";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header className="Navbar-logo">
        <Link to="/" className="logo2">
          <div className="logo"></div>
          <h1>Stripe-tec</h1>
        </Link>

        <Link to='/blog'>          
          <h2>Blog</h2>
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default RootLayout;
