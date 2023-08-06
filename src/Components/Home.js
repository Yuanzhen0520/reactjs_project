import React from "react";
import Navbar from "./Navbar";
import "./Stylesheet/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="master">
      <Navbar />
      <div className="father d-flex flex-column flex-md-row container justify-content-between align-items-center my-5">
        <div className="child-1 order-2 order-md-1">
          <h2>
            Introducing
            <br />
            Z-Mobile
          </h2>
          <h3 className="headerh3">Embrace a new era of seamless connectivity</h3>
          <p>All your needs are satisfied here!</p>
          <Link to="/download" style={{ textDecoration: "none" }}>
            <button type="button" className="downloadBtn">
              Shop Now <img src={"images/arrow.png"} alt="arrow" />
            </button>
          </Link>
        </div>
        <div className="child-2 text-center my-5 my-md-0 order-md-2 order-1">
          <img src={"images/device.png"} alt="Device" className="controller" />
        </div>
      </div>
    </div>
  );
};

export default Home;
