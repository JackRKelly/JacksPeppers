import React, {
  useState,
  FC,
  FormEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import "./index.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductTag from "../../components/ProductTag/ProductTag";
import { Range } from "rc-slider";
import { heatSwitch } from "../../common/heat";
import "rc-slider/assets/index.css";
import {
  ColorKind,
  colors,
  convertToKind,
  colorName,
} from "../../common/color";
import { ProductItem } from "../../common/cart";

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Shop: FC<Props> = (props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [heatRange, setHeatRange] = useState([1, 5]);
  const [searchColor, setSearchColor] = useState(ColorKind.Red);
  const [productList, setProductList] = useState<Array<ProductItem>>([]);
  const { setIsLoading } = props;

  useEffect(() => {
    document.title = "Shop | Jack's Peppers";
    setIsLoading(true);

    fetch("/api/inventory")
      .then((result) => {
        result.json().then((json) => {
          setProductList(json);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="shop">
      <header>
        <h1>Shop</h1>
        <div className="search-settings">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="search-settings--form"
          >
            <div className="search-settings--form-basic">
              <input
                type="text"
                name="search"
                placeholder="Search"
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
                  Heat Range: {heatSwitch(heatRange[0])} -{" "}
                  {heatSwitch(heatRange[1])}
                </p>
                <Range
                  min={1}
                  max={5}
                  onChange={(value) => {
                    setHeatRange(value);
                  }}
                  step={1}
                  defaultValue={[1, 5]}
                  allowCross={false}
                />
              </div>
              <div className="search-settings--form-advanced--color">
                <p className="search-settings--form-advanced--color-current">
                  Color:{" "}
                  <ProductTag
                    color={searchColor}
                    text={colorName(searchColor)}
                  />
                </p>
                <div className="search-settings--form-advanced--color-container">
                  {colors().map((color, index) => (
                    <div
                      className="search-settings--form-advanced--color-container--option"
                      style={{
                        backgroundColor: convertToKind(color),
                        border:
                          searchColor === convertToKind(color)
                            ? `3px inset ${convertToKind(color)}`
                            : "none",
                      }}
                      title={`Select ${color.name} color.`}
                      onClick={() => {
                        setSearchColor(convertToKind(color));
                      }}
                      key={index}
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
          {productList.map((product) => (
            <ProductCard
              id={product._id}
              image={product.image}
              name={product.name}
              heat={product.heat}
              price={product.price}
              inStock={product.quantity !== 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
