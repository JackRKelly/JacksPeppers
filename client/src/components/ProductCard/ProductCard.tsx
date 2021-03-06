import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
import HeatRating from "../HeatRating/HeatRating";
import "./index.scss";
import { heatSwitch } from "../../common/heat";

interface Props {
  name: string;
  price: number;
  inStock: boolean;
  heat: number;
  id: string | boolean;
  image?: string;
}

const ProductCard: FC<Props> = (props) => {
  const { name, price, inStock, id, image, heat } = props;

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
            {!inStock ? "Out of stock" : `$${price.toFixed(2)}`}
          </span>
          <div className="product-card--image-container--heat">
            <span className="product-card--image-container--heat-icon">
              <HeatRating heat={heat} />
            </span>
            <span className="product-card--image-container--heat-text">
              {heatSwitch(heat)} Pepper
            </span>
          </div>

          <img
            src={imagePath}
            alt={`${name} Pepper.`}
            title={`${name} Pepper.`}
            className="product-card--image-container--image"
            style={{ opacity: inStock ? 1 : 0.5 }}
          />
        </div>
        <div className="product-card--title-container">
          <h1 className="product-card--title">{name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
