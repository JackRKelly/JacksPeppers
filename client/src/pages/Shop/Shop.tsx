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
  const [searchColor, setSearchColor] = useState("Red|rgb(255, 0, 0)");
  const colorList = [
    "Red|rgb(255, 0, 0)",
    "Orange|rgb(255, 128, 0)",
    "Purple|rgb(153, 51, 255)",
    "Pink|rgb(255, 0, 255)",
    "Peach|rgb(255, 204, 153)",
    "White|rgb(255, 255, 255)",
    "Yellow|rgb(255, 255, 0)",
    "Lime|rgb(64, 255, 64)",
    "Brown|rgb(102, 51, 0)",
    "Black|rgb(0, 0, 0)",
    "Green|rgb(0, 89, 0)",
  ];

  const lightOrDark = (color: string): boolean => {
    let tempColor: any;
    var r: number, g: number, b: number, hsp;

    tempColor = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );
    r = tempColor ? (tempColor[1] as number) : 0;
    g = tempColor ? (tempColor[2] as number) : 0;
    b = tempColor ? (tempColor[3] as number) : 0;

    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    if (hsp > 127.5) {
      return true;
    } else {
      return false;
    }
  };

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
                <p className="search-settings--form-advanced--price-title">
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
                <p className="search-settings--form-advanced--heat-title">
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
              <div className="search-settings--form-advanced--color">
                <p>
                  Color:{" "}
                  <span
                    className="search-settings--form-advanced--color-current"
                    style={{
                      backgroundColor: searchColor.split("|")[1],
                      color: lightOrDark(searchColor.split("|")[1])
                        ? "black"
                        : "white",
                    }}
                  >
                    {searchColor.split("|")[0]}
                  </span>
                </p>
                <div className="search-settings--form-advanced--color-container">
                  {colorList.map((color) => (
                    <div
                      className="search-settings--form-advanced--color-container--option"
                      style={{
                        backgroundColor: color.split("|")[1],
                        opacity: searchColor === color ? "0" : "1",
                      }}
                      title={`Select ${color.split("|")[0]} color.`}
                      onClick={() => {
                        setSearchColor(color);
                      }}
                    ></div>
                  ))}
                </div>
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
