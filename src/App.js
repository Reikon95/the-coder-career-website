import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { AvailableDevs } from "./pages/juniors/availabledevs";
import { Jobs } from "./pages/jobs/jobs";
import { AboutUs } from "./pages/about/aboutus";
import {ContactUs} from "./pages/contact/contact"
import "./App.css";
export default function App() {
  useEffect(() => {
    console.log(
      "Welcome to The Coder Career! Subscribe to us on Youtube and Twitch"
    );
  });

  return (
    <Router>
      <div>
        <nav className="parent-navbar">
          <ul className="navbar-list">
            <li className="navbar-link navbar-link-home">
              <Link to="/" className="navbar-link navbar-link-home">
                The Coder Career
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/AvailableDevs" className="navbar-link">
                Available Devs
              </Link>
            </li>
            <li>
              <Link to="/Jobs" className="navbar-link">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="navbar-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/AvailableDevs">
            <AvailableDevs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/Jobs">
            <Jobs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
