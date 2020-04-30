import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home: React.FC = () => {
  return (
    <main className="home">
      <header>
        <h1>Jack's Peppers</h1>
        <h3>Pepper Seed Supplier</h3>
        <Link to="/shop">Shop</Link>
      </header>

      <h5>Featured Products:</h5>
      <div className="featured-products">
        <ProductCard
          id={53}
          title="Habanero Orange Lightning"
          price={54.0}
          inStock={true}
          color="#333333"
        />
        <ProductCard
          id={55}
          title="Pink Tiger"
          price={23.0}
          inStock={false}
          color="#333333"
        />
        <ProductCard
          id={24}
          title="Taj Mahal Pink & Pink Minion"
          price={42.5}
          inStock={true}
          color="#333333"
        />
      </div>
    </main>
  );
};

export default Home;
