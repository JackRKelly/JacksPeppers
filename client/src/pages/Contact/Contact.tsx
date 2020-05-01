import React from "react";
import "./index.scss";

const Contact: React.FC = () => {
  document.title = "Contact | Jack's Peppers";
  console.log("contact");

  return (
    <main className="contact">
      <h1>Contact</h1>
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
