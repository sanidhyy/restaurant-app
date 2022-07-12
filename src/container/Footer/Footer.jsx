import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

// Footer
const Footer = () => (
  <div className="app__footer section__padding">
    {/* Footer Overlay */}
    <FooterOverlay />
    {/* Newsletter */}
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        {/* Heading */}
        <h1 className="app__footer-headtext">Contact Us</h1>

        {/* Contact Options */}
        <p className="p__opensans">9 W 53rd St,New York, NY 10019, USA</p>
        <p className="p__opensans">
          <a href="tel:+1212-344-1230">+1 212-344-1230</a>
        </p>
        <p className="p__opensans">
          <a href="tel:+1311-654-1222">+1 311-654-1222</a>
        </p>
        <p className="p__opensans" style={{ textTransform: "lowercase" }}>
          <a href="mailto:contact@gericht.com">contact@gericht.com</a>
        </p>
      </div>
      <div className="app__footer-links_logo">
        {/* Brand Logo */}
        <img src={images.gericht} alt="Gericht" />

        {/* Quote */}
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        {/* Spoon */}
        <img
          src={images.spoon}
          alt="Spoon"
          className="spoon_img"
          style={{ marginTop: 15 }}
        />

        {/* Social media icons */}
        <div className="app__footer-links_icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FiTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>
      {/* Working Hours */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 am</p>
      </div>
    </div>

    {/* Footer Copyright */}
    <div className="footer__copyright">
      <p className="p__opensans">
        {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--color-golden)" }}>Gerîcht</span>. All
        Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
