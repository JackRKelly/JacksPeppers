import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="home">
      <header>
        <h1>Jack's Peppers</h1>
        <h3>Pepper Seed Supplier</h3>
        <Link to="/shop">Shop</Link>
      </header>

      <h5>Featured Products:</h5>
      <ul>
        <li>
          <Link to="/product/53">Product 53</Link>
        </li>
        <li>
          <Link to="/product/64">Product 64</Link>
        </li>
        <li>
          <Link to="/product/74">Product 75</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
