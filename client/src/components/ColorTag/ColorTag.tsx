import React from "react";
import "./index.scss";

interface Props {
  color: string;
}

const ColorTag: React.FC<Props> = (props) => {
  const { color } = props;

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
      className="color-tag"
      style={{
        backgroundColor: color.split("|")[1],
        color: lightOrDark(color.split("|")[1]) ? "black" : "white",
      }}
    >
      {color.split("|")[0]}
    </span>
  );
};

export default ColorTag;
