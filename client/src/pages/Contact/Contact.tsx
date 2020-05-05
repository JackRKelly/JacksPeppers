import React, { useState } from "react";
import "./index.scss";
import FormInput from "../../components/FormInput/FormInput";

const Contact: React.FC = () => {
  document.title = "Contact | Jack's Peppers";

  const [error, setError] = useState(["", "", "test"]);

  return (
    <main className="contact">
      <header className="header">
        <h1 className="header--title">Contact</h1>
        <h3 className="header--description">
          Fill out the form below to get in contact
        </h3>
      </header>

      <form className="contact-form">
        <FormInput name="name" type="text" element="input" error={error[0]} />
        <FormInput name="email" type="email" element="input" error={error[1]} />
        <FormInput
          name="message"
          type="text"
          element="textarea"
          error={error[2]}
        />

        <button>Submit</button>
      </form>
    </main>
  );
};

export default Contact;
