import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-top">
        <div className="message"></div>
        <div className="links">
          <div className="link">
            <p>
              <a
                data-text="hi@theshape.dev"
                href="mailto:hi@theshape.dev"
              >
                hi@theshape.dev
              </a>
            </p>
          </div>
          <div className="link">

            <p>
              <Link data-text="About" to="/about">
                About
              </Link>
            </p>

            <p>
              <Link data-text="Contact" to="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">&copy; Shape Development</div>
    </footer>
  );
};

export default Footer;
