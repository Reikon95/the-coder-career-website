import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { AvailableDevs } from "./pages/juniors/availabledevs";
import { AboutUs } from "./pages/about/aboutus";
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
                About Us
              </Link>
            </li>
            <li>
              <Link to="/AvailableDevs" className="navbar-link">
                Available Devs
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
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
