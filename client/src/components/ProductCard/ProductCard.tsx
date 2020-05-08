import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductTag from "../ProductTag/ProductTag";
import TagList from "../TagList/TagList";
import HeatRating from "../HeatRating/HeatRating";
import "./index.scss";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  heat: number;
  id: number;
  colorList: Array<string>;
  image?: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id, colorList, image, heat } = props;

  const [imagePath, setImagePath] = useState();

  if (image) {
    import(`../../assets/images/${image}`).then((image) =>
      setImagePath(image.default)
    );
  }

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card--link">
        <div className="product-card--image-container">
          <span className="product-card--image-container--price">
            ${price.toFixed(2)}
          </span>
          <span className="product-card--image-container--heat">
            <HeatRating heat={heat} />
          </span>
          <img
            src={imagePath}
            alt={`${title} Pepper.`}
            title={`${title} Pepper.`}
            className="product-card--image-container--image"
            style={{ opacity: inStock ? 1 : 0.5 }}
          />
        </div>
        <h1 className="product-card--title">{title}</h1>
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
