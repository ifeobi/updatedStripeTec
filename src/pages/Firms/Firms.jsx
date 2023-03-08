import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Form from "../../components/Form/Form";
import Whatsapp from "../../components/Whatsapp/Whatsapp";
import "./Firms.scss";

const Firms = () => {
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
    <div className="banner-firm">
      <Helmet>
        <title>What We Do For Professionals</title>
        <meta
          name="description"
          content="Want to take your practice to the next level? Our digital agency can help you attract more clients and boost your online presence. Trust us to create a customized strategy for your brand and deliver real results."
        />
      </Helmet>
      <Whatsapp />
      <div className="banner-container">
        <div className="innerPage">
          <h1>What We Do For Service-Based Professionals</h1>
          <p>
            At Stripe-tec our goal is simple; bring our clients at least {""}
            <span style={{ color: "rgba(108, 5, 5, 0.974)" }}>
              <b>1 new lead every day</b>
            </span>
            . We do this by employing a variety of performance marketing methods
            that include Social Media Ads, Google Ads, &amp; Email Marketing. We
            also provide website design, social media management, graphic
            design, &amp; SEO services to all our clients. <br /> While we
            understand that there are restrictions on some professional bodies
            from marketing their services, we use best practices to provide
            contents on the web to position our clients as authorities in their
            field and position them on the first page of Google search.
          </p>

          <Link to="#fform">
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
              generation for service-based professionals all around Nigeria. Our
              clients have included law and accounting firms, schools,
              hospitals, non-profits, landscaping/property maintenance
              companies, IT consultants, FinTech companies, auto mechanics,
              &amp; barbershops. We have years of experience in building our
              clients’ online presence, and bringing them new leads every day!
              We pride ourselves in making it easy (as easy as learning your
              ABCs) for our clients to understand what we are doing for them and
              get consistent results.
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
                  In this step, we will work with you to understand your
                  business. This is done through a free consultation that we
                  offer, as well as industry/geographic research that we
                  perform.
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
                  your business’ needs. Upon your approval, we implement this
                  plan to start getting you new clients every day!
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
                  as technology changes, we will adapt to it. This means that
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
              <p>A Local Law Firm</p>
              <p>
                <strong>Primary Goal: </strong>
                <br />
                Increase Client Base
              </p>
              <p>
                <strong>Secondary Goal: </strong>
                <br />
                Make Sure They Always Appear When
                <br />
                People Search for Legal Related Questions.
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
                  to start ranking higher for keywords such as “best law firm(s)
                  in Nigeria”, “law firms around me”, &amp; more.
                </li>
                <li>
                  <strong>A Google Ads Campaign</strong> to attract people
                  especially foreigners searching for Nigerian immigration
                  related matters.
                </li>
                <li>
                  <strong>Email Marketing Campaigns</strong> to provide a direct
                  and cost-effective way to reach potential and existing
                  clients, build relationships, and promote services or
                  expertise.
                </li>
                <li>
                  <strong>Facebook &amp; Instagram Campaigns</strong> to
                  increase brand awareness, reach new audiences, engage with
                  existing clients, and promote services or expertise through
                  targeted advertising and content marketing.
                </li>
              </ul>
            </div>

            <div className="serviceGridBlock third">
              <div className="serviceThird-last">
                <h3>Results After 1 Year</h3>
                <ul>
                  <li>
                    <strong>54,410</strong> new people visited the website
                    organically
                  </li>
                  <li>
                    <strong>₦1,200,000</strong> in ad spend
                  </li>
                  {/* <li>
                    <strong>N35,750,500</strong> of revenue generated*
                  </li>
                  <li>
                    <strong>N29.79*</strong> ROI
                  </li> */}
                  {/* <li>
                    <strong>679,362</strong> people saw an ad on average of 4
                    times
                  </li> */}
                  <li>
                    <strong>2</strong> new locations opened
                  </li>
                </ul>
              </div>
              {/* <div className="serviceThird-last">
                <p>
                  *based on a customer lifetime value of $348 (1 $29 haircut per
                  month for a whole year)
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section5" id="fform">
        <Form />
      </section>
      <footer className="bottom">
        <div class="container">
          <div class="copyright">
            © Copyright Stripe-tec All rights reserved{" "}
            {new Date().getFullYear()}{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Firms;
