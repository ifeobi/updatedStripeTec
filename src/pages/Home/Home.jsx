import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-inner">
        <div className="landing-page-logo">
          <div className="logo"></div>
          <Link to="/">
            <h1>Stripe-tec</h1>
          </Link>
        </div>

        <div className="landing-div">
          <h2>Are You...</h2>

          <div className="landingMenu">
            <Link to="/businesses">
              <p>Looking to bring in new customers to your business?</p>
            </Link>

            <Link to="firms">
              <p>A Lawyer or professional practice?</p>
            </Link>

            <Link to="/businesses/#form">
              <p>Looking to contact us?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
