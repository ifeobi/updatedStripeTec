import React, { useEffect } from "react";
import "./Business.scss";
import Form from "../../components/Form/Form";
import Whatsapp from "../../components/Whatsapp/Whatsapp";
import { Link, useLocation } from "react-router-dom";

const Business = () => {
  let location = useLocation({
    pathname: "/",
    hash: "#projects",
  });

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="banner">
      <Whatsapp />
      <div className="container1">
        <div className="innerPage">
          <h1>What We Do For Businesses</h1>
          <p>
            At Stripe-tec, we aim to get our clients at least {""}
            <span style={{ color: "rgba(108, 5, 5, 0.974)" }}>
              <b>1 new lead every day</b>
            </span> {""}
            by using effective marketing methods such as social media ads,
            Google ads, &amp; email marketing. We also offer{" "}
            <span style={{ color: "rgba(108, 5, 5, 0.974)" }}>
              <b>website design</b>
            </span>
            , social media management, graphic design, &amp; SEO services to all
            our clients.
          </p>

          <Link to="#form">
            <button className="normal">BOOK A QUICK CALL</button>
          </Link>
        </div>
      </div>
      <section className="section2">
        <div className="section-about">
          <div className="content">
            <h2>About Us</h2>
            <p>
              Stripe-tec is a digital marketing company that focuses on lead
              generation for service-based businesses all around Nigeria. Our
              clients have included hotels, schools, non-profits,
              landscaping/property maintenance companies, IT consultants,
              FinTech companies, auto mechanics, &amp; barbershops. We have
              years of experience in building our clients’ online presence, and
              bringing them new leads every day! We pride ourselves in making it
              easy (as easy as learning your ABCs) for our clients to understand
              what we are doing for them and get consistent results.
            </p>
            {/* <p>
              <img
                decoding="async"
                loading="lazy"
                class="alignnone size-full wp-image-568"
                src="https://abcdigital.ca/wp-content/uploads/2023/01/google.jpg"
                alt=""
                width="145"
                height="60"
              />{" "}
              <img
                decoding="async"
                loading="lazy"
                class="alignnone size-medium wp-image-569"
                src="https://abcdigital.ca/wp-content/uploads/2023/01/meta.jpg"
                alt=""
                width="137"
                height="60"
              />
            </p> */}
          </div>
        </div>

        <div className="section-image"></div>
      </section>

      <section className="section3">
        <div className="container">
          <h3>The ABC Process</h3>
          <div className="process-body">
            <div className="process-item service-process">
              <div
                class="processStep-service"
                style={{
                  color: "rgba(108, 5, 5, 0.974)",
                  backgroundColor: "white",
                }}
              >
                A{" "}
              </div>
              <h4>We Learn About Your Business</h4>
              <div className="service-content">
                <p>
                  In this step, we work with you the business owner to
                  understand your business. This is done through a free
                  consultation that we offer, as well as industry/geographic
                  research that we perform.
                </p>
              </div>
            </div>

            <div className="process-item service-process">
              <div
                className="processStep-service"
                style={{
                  color: "rgba(108, 5, 5, 0.974)",
                  backgroundColor: "white",
                }}
              >
                B{" "}
              </div>
              <h4>Custom Plan</h4>
              <div className="service-content">
                <p>
                  In this step, we take all the information we learned about
                  your business and create a custom plan that revolves around
                  your business’s needs. Upon your approval, we implement this
                  plan to start getting you new patients every day!
                </p>
              </div>
            </div>

            <div className="process-itemc service-process">
              <div
                className="processStep-service2"
                style={{
                  color: "rgba(108, 5, 5, 0.974)",
                  backgroundColor: "white",
                }}
              >
                C{" "}
              </div>
              <h4>Optimize</h4>
              <div className="service-content">
                <p>
                  In this step, we will constantly be working with you to
                  optimize and improve whatever your custom plan entails. Also,
                  as technology changes, we will change with it. This means that
                  you don’t have to worry about your digital marketing ever
                  going obsolete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <h3 style={{ color: "rgba(108, 5, 5, 0.974)" }}>Case Study</h3>

          <div className="serviceBody">
            <div
              className="serviceGridBlock first"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h3>The Client</h3>
              <p>An Online Auto Parts Store</p>
              <p>
                <strong>Primary Goal: </strong>
                <br />
                Increase Customer Base
              </p>
              <p>
                <strong>Secondary Goal: </strong>
                <br />
                Make Sure Everyone In The Country Knows
                <br />
                Who They Are
              </p>
            </div>

            <div
              className="serviceGridBlock second"
              style={{ backgroundColor: "rgba(108, 5, 5, 0.974)" }}
            >
              <h3>Our Strategy</h3>
              <ul>
                <li>
                  <strong>A Search Engine Optimization (SEO) Campaign</strong>{" "}
                  to start ranking higher for keywords such as “spare parts
                  dealer near me”, “orignal spare parts”, &amp; more.
                </li>
                <li>
                  <strong>A Google Ads Campaign</strong> to attract people
                  already searching for original spare parts in their local
                  area.
                </li>
                <li>
                  <strong>Email Marketing Campaigns</strong> to ensure that
                  leads are nurtured and converted into customers. We also used
                  email marketing to market to current customers in order to
                  upsell them on services &amp; products.
                </li>
                <li>
                  <strong>Facebook &amp; Instagram Campaigns</strong> to
                  increase brand awareness, reach new audiences, engage with
                  existing customers, and promote products through targeted
                  advertising and content marketing.
                </li>
              </ul>
            </div>

            <div className="serviceGridBlock third">
              <div className="serviceThird-last">
                <h3>Results After 1 Year</h3>
                <ul>
                  <li>
                    <strong>104,182</strong> new people visited the website
                    organically
                  </li>
                  <li>
                    <strong>₦1,200,000</strong> in ad spend
                  </li>
                  <li>
                    <strong>₦54,000,000</strong> of revenue generated*
                  </li>
                  <li>
                    <strong>N45</strong> ROI
                  </li>
                  <li>
                    <strong>679,362</strong> people saw an ad on average of 4
                    times
                  </li>
                  <li>
                    <strong>1</strong> new location opened
                  </li>
                </ul>
              </div>
              <div className="serviceThird-last">
                <p>
                  *based on a customer yearly value of ₦115,000 (an estimate of
                  the cost of changing oil twice a year and cost of changing
                  transmission fluid once a year )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section5" id="form">
        <Form />
      </section>
      <footer className="bottom">
        <div class="container">
          <div class="copyright">
            © Copyright Stripe-tec. All rights reserved 2023{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Business;
