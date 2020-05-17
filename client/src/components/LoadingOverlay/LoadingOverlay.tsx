import React, { ReactNode, FC } from "react";
import "./index.scss";

interface Props {
  loading: boolean;
}

const LoadingOverlay: FC<Props> = (props) => {
  const { loading } = props;

  return (
    <div
      className="loading-overlay"
      style={{
        opacity: loading ? "1" : "0",
        pointerEvents: loading ? "auto" : "none",
      }}
    >
      <div className="loading-overlay--spinner"></div>
    </div>
  );
};

export default LoadingOverlay;
