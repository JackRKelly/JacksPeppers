import React, { useState, useRef } from "react";
import "./index.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Shop: React.FC = () => {
  document.title = "Shop | Jack's Peppers";

  const [showAdvanced, setShowAdvanced] = useState(false);

  const [priceRange, setPriceRange] = useState([0, 5]);
  const [heatRange, setHeatRange] = useState([0, 5]);

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
                onClick={() => {
                  setShowAdvanced(!showAdvanced);
                }}
              >
                Advanced
              </button>
              <button
                className="search-settings--form-basic--submit"
                type="submit"
              ></button>
            </div>
            <div
              className="search-settings--form-advanced"
              style={{
                maxHeight: showAdvanced ? `250px` : "0",
                padding: showAdvanced ? "10px" : "0",
              }}
            >
              <div className="search-settings--form-advanced--price">
                <p>
                  Price Range: ${priceRange[0].toFixed(2)} - $
                  {priceRange[1].toFixed(2)}
                </p>
                <Range
                  min={0}
                  max={20}
                  onChange={(value) => {
                    setPriceRange(value);
                  }}
                  step={0.5}
                  defaultValue={[0, 5]}
                  allowCross={false}
                />
              </div>
              <div className="search-settings--form-advanced--heat">
                <p>
                  Heat Range: {heatRange[0]} - {heatRange[1]}
                </p>
                <Range
                  min={0}
                  max={5}
                  onChange={(value) => {
                    setHeatRange(value);
                  }}
                  step={1}
                  defaultValue={[0, 5]}
                  allowCross={false}
                />
              </div>
            </div>
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
