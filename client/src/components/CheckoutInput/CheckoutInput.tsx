import React, { FC, Dispatch, SetStateAction } from "react";

interface Props {
  inputType: string;
  name: string;
  value: string;
  updateValue: Dispatch<SetStateAction<string>>;
}

const CheckoutForm: FC<Props> = (props) => {
  const { inputType, name, value, updateValue } = props;

  return (
    <div className="input-container">
      <label htmlFor={name} className="input-container--label">
        {name}:
      </label>
      <input
        type={inputType}
        value={value}
        onChange={(e) => {
          updateValue(e.target.value);
        }}
        placeholder={`${name} Input`}
        className="input-container--input"
        name={name}
      />
    </div>
  );
};

export default CheckoutForm;
