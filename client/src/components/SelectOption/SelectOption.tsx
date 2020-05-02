import React from "react";
import "./index.scss";

interface Props {
  option: string;
}

const SelectOption: React.FC<Props> = (props) => {
  const { option } = props;

  return <option value={option}>{option}</option>;
};

export default SelectOption;
