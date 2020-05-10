import React, { FC } from "react";

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

const FormInput: FC<Props> = (props) => {
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
          style={{
            border: error ? "red solid 1px" : "none",
            boxShadow: error ? "0 0 4px rgba(255,0,0,.4)" : "",
          }}
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
          style={{
            border: error ? "red solid 1px" : "none",
            boxShadow: error ? "0 0 4px rgba(255,0,0,.4)" : "",
          }}
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
