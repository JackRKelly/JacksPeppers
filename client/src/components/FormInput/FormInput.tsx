import React, { FC } from "react";

enum InputType {
  Input,
  Textarea,
}

interface Props {
  name: string;
  element: InputType;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}

const FormInput: FC<Props> = (props) => {
  const { type, name, element, value, onChange, error, placeholder } = props;

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
          value={value}
          onChange={onChange}
          className="contact-form--container-input"
          style={{
            border: error ? "red solid 1px" : "none",
            boxShadow: error ? "0 0 4px rgba(255,0,0,.4)" : "",
          }}
          placeholder={placeholder}
        />
        <span
          className="contact-form--container-error"
          style={{
            opacity: error ? "1" : "0",
            maxHeight: error ? "30px" : "0",
          }}
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
          value={value}
          onChange={onChange}
          className="contact-form--container-input"
          style={{
            border: error ? "red solid 1px" : "none",
            boxShadow: error ? "0 0 4px rgba(255,0,0,.4)" : "",
          }}
          placeholder={placeholder}
        ></textarea>
        <span
          className="contact-form--container-error"
          style={{
            opacity: error ? "1" : "0",
            maxHeight: error ? "30px" : "0",
          }}
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
