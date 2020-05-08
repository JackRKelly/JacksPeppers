import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./index.scss";

const Home: React.FC = () => {
  document.title = "Home | Jack's Peppers";

  return (
    <main className="home">
      <header className="hero-section">
        <h1 className="hero-section--title">Jack's Peppers</h1>
        <h3 className="hero-section--description">Pepper Seed Supplier</h3>
        <Link className="hero-section--link" to="/shop">
          Shop
        </Link>
      </header>

      <div className="featured-products">
        <h3>Featured Products:</h3>
        <div className="featured-list">
          <ProductCard
            id={53}
            title="Sugar Rush Red"
            price={2.5}
            inStock={true}
            colorList={["Red|rgb(255, 0, 0)", "Orange|rgb(255, 128, 0)"]}
            image="sugar-red.jpg"
          />
          <ProductCard
            id={55}
            title="Pink Tiger"
            price={4}
            inStock={false}
            colorList={["Red|rgb(255, 0, 0)", "Orange|rgb(255, 128, 0)"]}
            image="pinktiger.jpg"
          />
          <ProductCard
            id={24}
            title="7 Pot White"
            price={3.5}
            inStock={true}
            colorList={["Red|rgb(255, 0, 0)", "Orange|rgb(255, 128, 0)"]}
            image="7potwhite.jpg"
          />
          <ProductCard
            id={24}
            title="Roxa Lantern Black"
            price={3.5}
            inStock={true}
            colorList={["Red|rgb(255, 0, 0)", "Orange|rgb(255, 128, 0)"]}
            image="roxa-black.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
