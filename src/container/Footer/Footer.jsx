import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St,New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 311-654-1222</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Gericht" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="Spoon"
          className="spoon_img"
          style={{ marginTop: 15 }}
        />
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
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        {new Date().getFullYear()} Gerîcht. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
