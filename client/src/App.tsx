import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/shop">
                    <Shop />
                  </Route>
                  <Route path="/product/:id">
                    <Product />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
