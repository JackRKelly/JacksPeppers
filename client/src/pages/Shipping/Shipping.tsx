import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import "./index.scss";

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Shipping: FC<Props> = (props) => {
  const { setIsLoading } = props;

  useEffect(() => {
    setIsLoading(false);
    document.title = "Shipping | Jack's Peppers";
  }, []);

  return (
    <main className="shipping">
      <h1>Shipping</h1>
    </main>
  );
};

export default Shipping;
