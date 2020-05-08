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
