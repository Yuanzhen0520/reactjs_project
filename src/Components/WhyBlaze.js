import React from 'react'
import "./Stylesheet/whyblaze.css";

const WhyBlaze = () => {
  return (
    <section className="whyblaze my-5">
    <h1>
        Why Z-Mobile?
    </h1>
    <p>Experience lightning-fast speeds, expansive coverage, and flexible plans that empower you to stay connected on your terms.</p>
    <div className="parent">
        <div className="features">
            <h3>Reliable Coverage</h3>
            <p>We offer widespread and reliable network coverage to stay connected wherever you are</p>
        </div>
        <div className="features">
            <h3>High-Speed Data</h3>
            <p>We provide fast and seamless internet connectivity for smooth streaming, downloading, and browsing experiences </p>
        </div>
        <div className="features">
            <h3>Flexible Plans</h3>
            <p>We offer flexible plans with options for daily, weekly, monthly, or custom durations, allowing customers to choose what suits them best</p>
        </div>
    </div>
    <div className="parent">
        <div className="features">
            <h3>Zero-Rating</h3>
            <p>Zero-rate certain apps or services, meaning they won't count toward customers' data usage, providing added value for specific activities such as streaming music or video.</p>
        </div>
        <div className="features">
          <h3>Hotspot Tethering</h3>
          <p>We include hotspot tethering capabilities, enabling customers to share their mobile data with other devices.</p>
        </div>
        <div className="features">
            <h3>Customer Service</h3>
            <p>Get responsive and helpful customer support through phone call and social media</p>
        </div>
    </div>
</section>
  )
}

export default WhyBlaze
