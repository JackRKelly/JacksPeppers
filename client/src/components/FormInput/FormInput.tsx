import React from "react";
import "./index.scss";

enum InputType {
  Input,
  Textarea,
}

interface Props {
  name: string;
  element: InputType;
  placeholder?: string;
  type?: string;
  error?: string;
}

const FormInput: React.FC<Props> = (props) => {
  const { type, name, element, error, placeholder } = props;

  const capitolize = (a: string): string => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  };

  if (element === InputType.Input) {
    return (
      <div className="contact-form--container input">
        <label htmlFor={name} className="contact-form--container-label">
          {capitolize(name)}:
        </label>
        <input
          type={type}
          name={name}
          className="contact-form--container-input"
          style={{ borderColor: error ? "red" : "black" }}
          placeholder={placeholder}
        />
        <span
          className="contact-form--container-error"
          style={{ display: error ? "block" : "none" }}
        >
          {error}
        </span>
      </div>
    );
  } else if (element === InputType.Textarea) {
    return (
      <div className="contact-form--container textarea">
        <label htmlFor={name} className="contact-form--container-label">
          {capitolize(name)}:
        </label>
        <textarea
          name={name}
          rows={10}
          className="contact-form--container-input"
          style={{ borderColor: error ? "red" : "black" }}
          placeholder={placeholder}
        ></textarea>
        <span
          className="contact-form--container-error"
          style={{ display: error ? "block" : "none" }}
        >
          {error}
        </span>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormInput;
