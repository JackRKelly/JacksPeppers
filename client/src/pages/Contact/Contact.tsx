import React, { useState, FC, useEffect, FormEvent } from "react";
import "./index.scss";
import FormInput from "../../components/FormInput/FormInput";

enum InputType {
  Input,
  Textarea,
}

const Contact: FC = () => {
  const [error] = useState(["", "", ""]);
  const [name, setName] = useState("Jack");
  const [email, setEmail] = useState("kcjackkelly@gmail.com");
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    document.title = "Contact | Jack's Peppers";
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = { name, email, message };
    console.log(body);
    await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className="contact">
      <header className="header">
        <h1 className="header--title">Contact</h1>
        <h3 className="header--description">
          Fill out the form below to get in contact
        </h3>
      </header>

      <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          element={InputType.Input}
          placeholder="John Doe"
          error={error[0]}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          element={InputType.Input}
          placeholder="johndoe@email.com"
          error={error[1]}
        />
        <FormInput
          name="message"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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
