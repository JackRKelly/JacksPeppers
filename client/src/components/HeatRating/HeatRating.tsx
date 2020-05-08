import React from "react";
import "./index.scss";

interface Props {
  heat: number;
}

const HeatRating: React.FC<Props> = (props) => {
  const { heat } = props;

  return <div className="heat-rating"></div>;
};

export default HeatRating;
