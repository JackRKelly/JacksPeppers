import React from "react";
import "./index.scss";

const Contact: React.FC = () => {
  document.title = "Contact | Jack's Peppers";
  console.log("contact");

  return (
    <main className="contact">
      <header>
        <h1>Contact</h1>
        <h3>Fill out the form below to get in contact</h3>
      </header>

      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Contact;
