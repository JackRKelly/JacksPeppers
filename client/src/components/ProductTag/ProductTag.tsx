import React from "react";
import "./index.scss";
import { ColorKind, lightOrDark } from "../../common/color";

interface Props {
  color: ColorKind;
  disabled?: boolean;
  text?: string;
}

const ProductTag: React.FC<Props> = (props) => {
  const { color, text, disabled } = props;

  return (
    <span
      className="product-tag"
      style={{
        backgroundColor: disabled ? "gray" : color,
        color: lightOrDark(disabled ? "gray" : color) ? "black" : "white",
        width: text ? "auto" : "27px",
        height: text ? "auto" : "27px",
      }}
      title={text}
    >
      {text}
    </span>
  );
};

export default ProductTag;
