import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const MENU_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Website1: React.FC = () => {
  return (
    <Router>
      <Navbar menuItems={MENU_ITEMS} />
      <Switch>
        <Route path="/" exact component={HeroSection} />
      </Switch>
    </Router>
  );
};

export default Website1;
