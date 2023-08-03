import React from "react";
import "./Stylesheet/BlazeScreenshot.css";

const BlazeScreenshot = () => {
  return (
    <section className="screenshot" id="sshots">
      <p>Our Phone Plan</p>
      <div className="phone">
        <div className="phone_plan">
          <h1 className="plan_name">5GB/M</h1>
          <p className="text">
            <ul className="plan_disc">
              <li className="list">Unlimited talk & text</li>
              <li className="list">Nationwide coverage</li>
              <li className="list">5GB of 5G or 4G LTE</li>
            </ul>
            <button data-btnText="$15" type="button" className="plan_btn">
              <span>$15</span>
            </button>
          </p>
        </div>
        <div className="phone_plan">
          <h1 className="plan_name">10GB/M</h1>
          <p className="text">
            <ul className="plan_disc">
              <li className="list">Unlimited talk & text</li>
              <li className="list">Nationwide coverage</li>
              <li className="list">10GB of 5G or 4G LTE</li>
            </ul>
            <button data-btnText="$30" type="button" className="plan_btn">
              <span>$30</span>
            </button>
          </p>
        </div>
        <div className="phone_plan">
          <h1 className="plan_name">15GB/M</h1>
          <p className="text">
            <ul className="plan_disc">
              <li className="list">Unlimited talk & text</li>
              <li className="list">Nationwide coverage</li>
              <li className="list">15GB of 5G or 4G LTE</li>
            </ul>
            <button data-btnText="$45" type="button" className="plan_btn">
              <span>$45</span>
            </button>
          </p>
        </div>
        <div className="phone_plan">
          <h1 className="plan_name">Unlimited</h1>
          <p className="text">
            <ul className="plan_disc">
              <li className="list">Unlimited talk & text</li>
              <li className="list">Nationwide coverage</li>
              <li className="list">Unlimited of 5G or 4G LTE</li>
            </ul>
            <button data-btnText="$60" type="button" className="plan_btn">
              <span>$60</span>
            </button>
          </p>
        </div>
      </div>
      <p className="blazeScreenshot">
        Get More Information{" "}
        <a href="https://t.me/projectblazeupdates/98" className="sslink">
          <b>Here</b>
        </a>
      </p>
    </section>
  );
};

export default BlazeScreenshot;
