import React from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const Product: React.FC = () => {
  const { id } = useParams();

  document.title = `Pepper Name | Jack's Peppers`;
  console.log(id);

  const pepper = {
    title: "Sugar Rush Red",
    price: 2.5,
    inStock: true,
    color: "#FF7937",
    image: "sugar-red.jpg",
  };

  return (
    <main className="product">
      <h1>{pepper.title}</h1>
      <h3>{pepper.price}</h3>
    </main>
  );
};

export default Product;
