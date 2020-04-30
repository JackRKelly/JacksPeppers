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
        <ProductCard id={53} title="Cayenne" price={54} inStock={true} />
        <ProductCard id={55} title="Jalapeno" price={23} inStock={true} />
        <ProductCard
          id={24}
          title="Carolina Reaper"
          price={42}
          inStock={true}
        />
      </div>
    </main>
  );
};

export default Home;
