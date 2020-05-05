import React from "react";
import "./index.scss";

interface Props {
  type?: string;
  name: string;
  element: string;
}

const FormInput: React.FC<Props> = (props) => {
  const { type, name, element } = props;

  const capitolize = (a: string): string => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  };

  if (element === "input") {
    return (
      <div className="contact-form--container input">
        <label htmlFor={name} className="contact-form--container-label">
          {capitolize(name)}
        </label>
        <input
          type={type}
          name={name}
          className="contact-form--container-input"
        />
        <span className="contact-form--container-error">Error</span>
      </div>
    );
  } else if (element === "textarea") {
    return (
      <div className="contact-form--container textarea">
        <label htmlFor={name} className="contact-form--container-label">
          {capitolize(name)}
        </label>
        <textarea
          name={name}
          className="contact-form--container-input"
        ></textarea>
        <span className="contact-form--container-error">Error</span>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormInput;
