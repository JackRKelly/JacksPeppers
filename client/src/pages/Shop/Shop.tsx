import React from "react";
import "./index.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop: React.FC = () => {
  document.title = "Shop | Jack's Peppers";

  return (
    <main className="shop">
      <header>
        <h1>Shop</h1>
        <div className="search-settings">
          <form action="" className="search-settings--form">
            <div className="search-settings--form-basic">
              <input
                type="text"
                name="search"
                placeholder="Enter keywords here"
                className="search-settings--form-basic--input"
              />
              <button
                className="search-settings--form-basic--advanced"
                type="button"
              >
                Advanced
              </button>
              <button
                className="search-settings--form-basic--submit"
                type="submit"
              ></button>
            </div>
            <div className="search-settings-form-advanced"></div>
          </form>
        </div>
      </header>
      <div className="search-results">
        <div className="search-results--list">
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
            title="7 Pot White"
            price={3.5}
            inStock={true}
            color="#F8F5E0"
            image="7potwhite.jpg"
            invert={true}
          />
          <ProductCard
            id={24}
            title="Roxa Lantern Black"
            price={3.5}
            inStock={true}
            color="#94315D"
            image="roxa-black.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Shop;
