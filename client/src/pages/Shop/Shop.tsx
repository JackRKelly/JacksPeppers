import React from "react";
import "./index.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import SelectOption from "../../components/SelectOption/SelectOption";

const Shop: React.FC = () => {
  document.title = "Shop | Jack's Peppers";
  console.log("shop");

  return (
    <main className="shop">
      <header>
        <h1>Shop</h1>
        <div className="search-settings">
          <div className="search-settings--filter">
            <label htmlFor="filter-select">Filter By</label>
            <SelectOption
              name="filter-select"
              options={["All Products", "7 Pot", "Sugar Rush"]}
            />
          </div>
          <div className="search-settings--sort">
            <label htmlFor="sort-select">Sort By</label>
            <SelectOption
              name="filter-select"
              options={[
                "Featured",
                "Best Selling",
                "Alphabetically, A-Z",
                "Alphabetically, Z-A",
                "Price, low to high",
                "Price, high to low",
                "Date, old to new",
                "Date, new to old",
              ]}
            />
          </div>
          <span className="search-settings--quantity">123 Products</span>
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
