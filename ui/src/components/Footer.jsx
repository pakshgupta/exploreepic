import React from "react";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </div>

      <footer className="footer-content">
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Paksh Gupta</h3>
            <p>Persuing B-Tech in AI and DS from GEU, Dehradun Uttrakhand</p>
            <p>Full Stack Developer</p>
          </div>
          <div className="footer-subscribe">
            <h3>Join with me</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Enter Your email"
              />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Contact Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.facebook.com/paksh.chhoras" target="_blank">
                  <FaFacebook className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/_paksh_gupta/" target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/paksh-gupta-053724212/" target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 9719699947</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Paksh Gupta. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
