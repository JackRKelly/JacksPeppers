import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorTag from "../../components/ColorTag/ColorTag";
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
    color: "#FF7937",
    colorList: ["Orange|rgb(255, 128, 0)", "Red|rgb(255, 0, 0)"],
    invert: false,
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
          <h1
            className="product-info--main-title"
            style={{ color: pepper.color }}
          >
            {pepper.title}
          </h1>
          <h3 className="product-info--main-price">
            ${pepper.price.toFixed(2)} - {pepper.seedCount}+ Seeds -{" "}
            {pepper.colorList.map((color) => (
              <ColorTag color={color} />
            ))}
          </h3>
          <h4 className="product-info--main-shipping">
            Free <span>Shipping</span> on orders over 10$.
          </h4>
          <p className="product-info--main-description">{pepper.description}</p>
          <a
            className="product-info--main-add"
            href=""
            style={{
              backgroundColor: pepper.color,

              color: pepper.invert ? "#333" : "white",
              boxShadow: pepper.invert
                ? "0 0 7px rgba(0, 0, 0, 0.2)"
                : "0 0 7px rgba(0, 0, 0, 0.3)",
              opacity: pepper.inStock ? 1 : 0.5,
              pointerEvents: pepper.inStock ? "auto" : "none",
            }}
          >
            Add to cart
          </a>
        </div>
      </div>
    </main>
  );
};

export default Product;
