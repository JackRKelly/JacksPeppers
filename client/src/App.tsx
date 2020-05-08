import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Shipping from "./pages/Shipping/Shipping";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navigation desktop">
        <ul className="navigation-list">
          <li className="navigation-list--item">
            <NavLink
              className="navigation-list--link"
              exact
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation-list--item">
            <NavLink
              className="navigation-list--link"
              to="/shop"
              activeClassName="active"
            >
              Shop
            </NavLink>
          </li>
          <li className="navigation-list--item">
            <NavLink
              className="navigation-list--link"
              to="/contact"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Route
        render={({ location }) => (
          <TransitionGroup className="content">
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route path="/product/:id">
                  <Product />
                </Route>
                <Route path="/home">
                  <Redirect to="/" />
                </Route>
                <Route path="/shipping">
                  <Shipping />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
};

export default App;
