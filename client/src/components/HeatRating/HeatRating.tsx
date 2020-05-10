import React from "react";
import SVG from "react-inlinesvg";
import FireIcon from "../../assets/svg/heat.svg";
import { heatSwitchColor } from "../../common/heat";

interface Props {
  heat: number;
}

const HeatRating: React.FC<Props> = (props) => {
  const { heat } = props;

  return (
    <SVG
      src={FireIcon}
      style={{ width: "20px", fill: heatSwitchColor(heat) }}
      className={`heat-rating`}
    />
  );
};

export default HeatRating;
