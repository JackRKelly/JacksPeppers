import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ColorKind } from "../../color";
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
            heat={1}
            price={2.5}
            inStock={true}
            colorList={[ColorKind.Red, ColorKind.Orange]}
            image="sugar-red.jpg"
          />
          <ProductCard
            id={55}
            title="Pink Tiger"
            heat={2}
            price={4}
            inStock={false}
            colorList={[ColorKind.Pink, ColorKind.Peach]}
            image="pinktiger.jpg"
          />
          <ProductCard
            id={24}
            title="7 Pot White"
            heat={3}
            price={3.5}
            inStock={true}
            colorList={[ColorKind.White]}
            image="7potwhite.jpg"
          />
          <ProductCard
            id={24}
            title="Roxa Lantern Black"
            heat={4}
            price={3.5}
            inStock={true}
            colorList={[ColorKind.Purple, ColorKind.Black]}
            image="roxa-black.jpg"
          />
          <ProductCard
            id={24}
            title="Roxa Lantern Black"
            heat={5}
            price={3.5}
            inStock={true}
            colorList={[
              ColorKind.Purple,
              ColorKind.Black,
              ColorKind.Pink,
              ColorKind.Peach,
              ColorKind.Red,
            ]}
            image="roxa-black.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
