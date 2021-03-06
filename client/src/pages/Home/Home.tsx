import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Home: FC<Props> = (props) => {
  const { setIsLoading } = props;

  useEffect(() => {
    setIsLoading(false);
    document.title = "Home | Jack's Peppers";
  }, [setIsLoading]);

  return (
    <main className="home">
      <header className="hero-section">
        <h1 className="hero-section--title">Jack's Peppers</h1>
        <h3 className="hero-section--description">Pepper Seed Supplier</h3>
        <Link className="hero-section--link" to="/shop">
          Shop
        </Link>
      </header>
    </main>
  );
};

export default Home;
