import React from "react";
import SVG from "react-inlinesvg";
import FireIcon from "../../assets/svg/heat.svg";
import "./index.scss";

interface Props {
  heat: number;
}

const HeatRating: React.FC<Props> = (props) => {
  const { heat } = props;

  return <SVG src={FireIcon} className={`heat-rating heat-rating--${heat}`} />;
};

export default HeatRating;
