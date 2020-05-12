import React, { useState, FC, useEffect } from "react";
import "./index.scss";
import FormInput from "../../components/FormInput/FormInput";

const Contact: FC = () => {
  const [error] = useState(["Error", "Error", "Error"]);

  useEffect(() => {
    document.title = "Contact | Jack's Peppers";
  }, []);

  enum InputType {
    Input,
    Textarea,
  }

  return (
    <main className="contact">
      <header className="header">
        <h1 className="header--title">Contact</h1>
        <h3 className="header--description">
          Fill out the form below to get in contact
        </h3>
      </header>

      <form className="contact-form">
        <FormInput
          name="name"
          type="text"
          element={InputType.Input}
          placeholder="John Doe"
          error={error[0]}
        />
        <FormInput
          name="email"
          type="email"
          element={InputType.Input}
          placeholder="johndoe@email.com"
          error={error[1]}
        />
        <FormInput
          name="message"
          type="text"
          element={InputType.Textarea}
          placeholder="Enter your message here..."
          error={error[2]}
        />

        <div className="contact-form--button-container">
          <button className="contact-form--button-container--submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
