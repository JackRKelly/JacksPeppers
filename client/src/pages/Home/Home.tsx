import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Jack's Peppers</h1>
      <h3>Pepper Seed Supplier</h3>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Home;
