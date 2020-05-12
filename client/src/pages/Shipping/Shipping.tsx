import React, { FC, useEffect } from "react";
import "./index.scss";

const Shipping: FC = () => {
  useEffect(() => {
    document.title = "Shipping | Jack's Peppers";
  }, []);

  return (
    <main className="shipping">
      <h1>Shipping</h1>
    </main>
  );
};

export default Shipping;
