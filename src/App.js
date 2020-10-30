import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { AvailableDevs } from "./pages/juniors/availabledevs";
import { AboutUs } from "./pages/about/aboutus";
export default function App() {
  useEffect(() => {
    console.log(
      "Welcome to The Coder Career! Subscribe to us on Youtube and Twitch"
    );
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/AvailableDevs">Available Devs</Link>
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
