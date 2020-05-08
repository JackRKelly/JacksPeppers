import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductTag from "../../components/ProductTag/ProductTag";
import TagList from "../../components/TagList/TagList";
import { Link } from "react-router-dom";
import { ColorKind } from "../../color";
import "./index.scss";

const Product: React.FC = () => {
  const { id } = useParams();

  document.title = `Pepper Name | Jack's Peppers`;

  const pepper = {
    title: "Sugar Rush Red",
    price: 2.5,
    seedCount: 10,
    inStock: true,
    heat: 0,
    catagory: ["Sugar Rush"],
    colorList: [ColorKind.Red, ColorKind.Orange],
    image: "sugar-red.jpg",
    description:
      "Gnarly long tails from these F4 peppers. Jays Peach Ghostscorpion X Reaper. Tyler Farms created the California Reaper. I received these before they were  named. I've put 3 generations on them with another growing. They might be a slightly different shape, than the original. Brutaly hot! Expect shape variability.",
  };

  const [imagePath, setImagePath] = useState();

  if (pepper.image) {
    import(`../../assets/images/${pepper.image}`).then((image) =>
      setImagePath(image.default)
    );
  }

  return (
    <main className="product">
      <div className="product-info">
        <div className="product-info--preview">
          <div className="product-info--preview-main">
            <img
              src={imagePath}
              alt={`${pepper.title} Pepper.`}
              title={`${pepper.title} Pepper.`}
            />
          </div>
          <ul className="product-info--preview-list">
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
          </ul>
        </div>
        <div className="product-info--main">
          <h1 className="product-info--main-title">{pepper.title}</h1>
          <h3 className="product-info--main-price">
            ${pepper.price.toFixed(2)} - {pepper.seedCount}+ Seeds
          </h3>
          <TagList>
            {pepper.colorList.map((color, index) => (
              <ProductTag color={color} key={index} />
            ))}
          </TagList>
          <h4 className="product-info--main-shipping">
            Free <Link to="/shipping">Shipping</Link> on orders over 10$.
          </h4>
          <p className="product-info--main-description">{pepper.description}</p>
          <a className="product-info--main-add" href="">
            Add to cart
          </a>
        </div>
      </div>
    </main>
  );
};

export default Product;
