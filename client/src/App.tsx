import React, { FC, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
//SVG
import SVG from "react-inlinesvg";
import Logo from "./assets/svg/logo.svg";
import Menu from "./assets/svg/menu.svg";
import Close from "./assets/svg/close.svg";
//Pages
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Shipping from "./pages/Shipping/Shipping";
import Cart from "./pages/Cart/Cart";
//Components
import Notification from "./components/Notification/Notification";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
//Common
import { countCart, CartItem } from "./common/cart";
import { NotificationItem } from "./common/notification";

const App: FC = () => {
  const [cart, setCart] = useState<Array<CartItem>>(
    JSON.parse(
      localStorage.getItem("cart") === null
        ? "[]"
        : localStorage.getItem("cart") || "[]"
    )
  );
  const [notification, setNotification] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  window.addEventListener("resize", checkMobile);

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <LoadingOverlay loading={isLoading} />
      <Router>
        {isMobile ? (
          <>
            <nav className="navigation mobile">
              <ul className="navigation-list">
                <li className="navigation-list--item">
                  <NavLink className="navigation-list--link logo" to="/">
                    <SVG src={Logo} />
                  </NavLink>
                </li>
                <li
                  className="navigation-list--item"
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                >
                  <button className="navigation-list--link menu">
                    <SVG src={Menu} />
                  </button>
                </li>
              </ul>
            </nav>
            <nav
              className="navigation-full"
              style={{
                maxHeight: menuOpen ? "1500px" : "0",
                top: menuOpen ? "0" : "-100vh",
              }}
            >
              <ul className="navigation-full--list">
                <li
                  className="navigation-full--list-item"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <button className="navigation-full--list-item--link close">
                    <SVG src={Close} />
                  </button>
                </li>
                <li
                  className="navigation-full--list-item"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <NavLink
                    className="navigation-full--list-item--link"
                    exact
                    to="/"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className="navigation-full--list-item"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <NavLink
                    className="navigation-full--list-item--link"
                    to="/shop"
                    activeClassName="active"
                  >
                    Shop
                  </NavLink>
                </li>
                <li
                  className="navigation-full--list-item"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <NavLink
                    className="navigation-full--list-item--link"
                    to="/contact"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>
                <li
                  className="navigation-full--list-item"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <NavLink
                    className="navigation-full--list-item--link cart"
                    to="/cart"
                    activeClassName="active"
                  >
                    Cart <span>{cart.length === 0 ? "" : countCart(cart)}</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </>
        ) : (
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
                <NavLink className="navigation-list--link logo" to="/">
                  <SVG src={Logo} />
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
        )}

        <Route
          render={({ location }) => (
            <TransitionGroup className="content">
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/">
                    <Home setIsLoading={setIsLoading} />
                  </Route>
                  <Route path="/contact">
                    <Contact
                      setNotification={setNotification}
                      setIsLoading={setIsLoading}
                    />
                  </Route>
                  <Route path="/shop">
                    <Shop setIsLoading={setIsLoading} />
                  </Route>
                  <Route path="/product/:id">
                    <Product
                      cart={cart}
                      setCart={setCart}
                      setIsLoading={setIsLoading}
                    />
                  </Route>
                  <Route path="/home">
                    <Redirect to="/" />
                  </Route>
                  <Route path="/shipping">
                    <Shipping setIsLoading={setIsLoading} />
                  </Route>
                  <Route path="/cart">
                    <Cart
                      cart={cart}
                      setCart={setCart}
                      setNotification={setNotification}
                      setIsLoading={setIsLoading}
                    />
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
