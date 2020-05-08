import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductTag from "../ProductTag/ProductTag";
import TagList from "../TagList/TagList";
import "./index.scss";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  heat: number;
  id: number;
  colorList: Array<string>;
  color?: string;
  image?: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id, colorList, color, image, heat } = props;

  const [imagePath, setImagePath] = useState();

  if (image) {
    import(`../../assets/images/${image}`).then((image) =>
      setImagePath(image.default)
    );
  }

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
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card--link">
        <img
          src={imagePath}
          alt={`${title} Pepper.`}
          title={`${title} Pepper.`}
          className="product-card--image"
          style={{ opacity: inStock ? 1 : 0.5 }}
        />
        <h1 className="product-card--title">
          {title}{" "}
          <span className="product-card--price">- ${price.toFixed(2)}</span>
        </h1>
        <TagList>
          {!inStock ? <ProductTag text={"Out of stock"} color={"gray"} /> : ""}

          {colorList.map((color, index) => (
            <ProductTag color={color.split("|")[1]} key={index} />
          ))}
        </TagList>
      </Link>
    </div>
  );
};

export default ProductCard;
