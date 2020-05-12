import React, { FC, useState } from "react";
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
import Notification from "./components/Notification/Notification";
import Cart from "./pages/Cart/Cart";
import { countCart } from "./common/cart";

interface CartItem {
  id: number;
  quantity: number;
}

enum NotificationTypes {
  success = "success",
  warning = "warning",
  error = "error",
}

interface NotificationItem {
  id: number;
  type: NotificationTypes;
  text: string;
}

const App: FC = () => {
  const [cart, setCart] = useState<Array<CartItem>>([]);
  const [notification, setNotification] = useState<NotificationItem[]>([
    {
      id: 0,
      type: NotificationTypes.success,
      text: "Form successfully submitted",
    },
  ]);

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
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
            <li className="navigation-list--item">
              <NavLink
                className="navigation-list--link cart"
                to="/cart"
                activeClassName="active"
              >
                Cart <span>{cart.length === 0 ? "" : countCart(cart)}</span>
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
                    <Contact
                      notification={notification}
                      setNotification={setNotification}
                    />
                  </Route>
                  <Route path="/shop">
                    <Shop />
                  </Route>
                  <Route path="/product/:id">
                    <Product cart={cart} setCart={setCart} />
                  </Route>
                  <Route path="/home">
                    <Redirect to="/" />
                  </Route>
                  <Route path="/shipping">
                    <Shipping />
                  </Route>
                  <Route path="/cart">
                    <Cart cart={cart} setCart={setCart} />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </>
  );
};

export default App;
