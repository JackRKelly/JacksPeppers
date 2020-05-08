import React from "react";
import "./index.scss";

interface Props {
  color: string;
  text?: string;
}

const ProductTag: React.FC<Props> = (props) => {
  const { color, text } = props;

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
    <span
      className="product-tag"
      style={{
        backgroundColor: color,
        color: lightOrDark(color) ? "black" : "white",
      }}
    >
      {text}
    </span>
  );
};

export default ProductTag;
