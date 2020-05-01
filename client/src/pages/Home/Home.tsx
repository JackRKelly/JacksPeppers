import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./index.scss";

const Home: React.FC = () => {
  document.title = "Home | Jack's Peppers";
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
          price={54}
          inStock={true}
          color="#C52902"
          image="habanero.jpg"
        />
        <ProductCard
          id={55}
          title="Pink Tiger"
          price={23}
          inStock={false}
          color="#722E47"
          image="pinktiger.jpg"
        />
        <ProductCard
          id={24}
          title="Taj Mahal Pink & Pink Minion"
          price={42.5}
          inStock={true}
          color="#C44960"
          image="tajminion.jpg"
        />
        <ProductCard
          id={53}
          title="Habanero Orange Lightning"
          price={54}
          inStock={true}
          color="#C52902"
          image="habanero.jpg"
        />
        <ProductCard
          id={55}
          title="Pink Tiger"
          price={23}
          inStock={false}
          color="#722E47"
          image="pinktiger.jpg"
        />
        <ProductCard
          id={24}
          title="Taj Mahal Pink & Pink Minion"
          price={42.5}
          inStock={true}
          color="#C44960"
          image="tajminion.jpg"
        />
        <ProductCard
          id={53}
          title="Habanero Orange Lightning"
          price={54}
          inStock={true}
          color="#C52902"
          image="habanero.jpg"
        />
        <ProductCard
          id={55}
          title="Pink Tiger"
          price={23}
          inStock={false}
          color="#722E47"
          image="pinktiger.jpg"
        />
        <ProductCard
          id={24}
          title="Taj Mahal Pink & Pink Minion"
          price={42.5}
          inStock={true}
          color="#C44960"
          image="tajminion.jpg"
        />
        <ProductCard
          id={53}
          title="Habanero Orange Lightning"
          price={54}
          inStock={true}
          color="#C52902"
          image="habanero.jpg"
        />
        <ProductCard
          id={55}
          title="Pink Tiger"
          price={23}
          inStock={false}
          color="#722E47"
          image="pinktiger.jpg"
        />
        <ProductCard
          id={24}
          title="Taj Mahal Pink & Pink Minion"
          price={42.5}
          inStock={true}
          color="#C44960"
          image="tajminion.jpg"
        />
      </div>
    </main>
  );
};

export default Home;
