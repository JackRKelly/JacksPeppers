import React from "react";
import "./index.scss";

interface Props {
  name: string;
  options: Array<string>;
}

const SelectOption: React.FC<Props> = (props) => {
  const { options, name } = props;

  return (
    <select name={name}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectOption;
