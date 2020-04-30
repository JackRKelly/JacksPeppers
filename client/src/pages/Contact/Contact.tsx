import React from "react";

const Contact: React.FC = () => {
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
