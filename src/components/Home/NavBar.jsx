import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="container">
          <div className="navbar-inner">
            {/* Logo Section */}
            <div className="navbar-logos">
              <Link to="/home">
                <img src="/assets/images/brand/acm_logo.png" alt="ACM Logo" />
              </Link>
              <Link to="/home">
                <img src="/assets/images/brand/brand-1/srm-logo.png"  className="srm-logo" alt="SRM Logo" />
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="navbar-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/#">Events</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/upcoming-events">Upcoming Events</Link>
                    </li>
                    <li>
                      <Link to="/past-events">Past Events</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/join-us">Join Us</Link>
                </li>
                <li>
                  <Link to="/team">Teams</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
