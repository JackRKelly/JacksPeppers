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
            heat={1}
            price={2.5}
            inStock={true}
            colorList={["Red|rgb(255, 0, 0)", "Orange|rgb(255, 128, 0)"]}
            color="rgb(255,120,44)"
            image="sugar-red.jpg"
          />
          <ProductCard
            id={55}
            title="Pink Tiger"
            heat={4}
            price={4}
            inStock={false}
            colorList={["Pink|rgb(255, 0, 255)", "Peach|rgb(255, 204, 153)"]}
            color="rgb(173,80,119)"
            image="pinktiger.jpg"
          />
          <ProductCard
            id={24}
            title="7 Pot White"
            heat={4}
            price={3.5}
            inStock={true}
            colorList={["White|rgb(255, 255, 255)"]}
            color="rgb(225,218,189)"
            image="7potwhite.jpg"
          />
          <ProductCard
            id={27}
            title="Roxa Lantern Black"
            heat={4}
            price={3.5}
            inStock={true}
            colorList={["Purple|rgb(153, 51, 255)", "Black|rgb(0, 0, 0)"]}
            color="rgb(138,39,73)"
            image="roxa-black.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
