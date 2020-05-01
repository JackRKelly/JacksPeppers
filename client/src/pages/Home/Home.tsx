import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./index.scss";

const Home: React.FC = () => {
  document.title = "Home | Jack's Peppers";
  console.log("home");

  return (
    <main className="home">
      <header>
        <h1>Jack's Peppers</h1>
        <h3>Pepper Seed Supplier</h3>
        <Link to="/shop">Shop</Link>
      </header>

      <div className="featured-products">
        <h3>Featured Products:</h3>
        <div className="featured-list">
          <ProductCard
            id={53}
            title="Sugar Rush Red"
            price={2.5}
            inStock={true}
            color="#FF7937"
            image="sugar-red.jpg"
          />
          <ProductCard
            id={55}
            title="Pink Tiger"
            price={4}
            inStock={false}
            color="#722E47"
            image="pinktiger.jpg"
          />
          <ProductCard
            id={24}
            title="Taj Mahal Pink & Pink Minion"
            price={4}
            inStock={true}
            color="#C44960"
            image="tajminion.jpg"
          />
          <ProductCard
            id={24}
            title="7 Pot White"
            price={3.5}
            inStock={true}
            color="#F8F5E0"
            image="7potwhite.jpg"
            invert={true}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
