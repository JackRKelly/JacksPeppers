import React from "react";
import "./index.scss";
import SVG from "react-inlinesvg";
import Dropdown from "../../assets/svg/dropdown.svg";

interface Props {
  name: string;
  options: Array<string>;
}

const SelectOption: React.FC<Props> = (props) => {
  const { options, name } = props;

  return (
    <div className="select-option">
      <select name={name}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <SVG className="select-option--dropdown" src={Dropdown} />
    </div>
  );
};

export default SelectOption;
