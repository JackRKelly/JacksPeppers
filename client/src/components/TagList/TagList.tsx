import React from "react";
import "./index.scss";

interface Props {
  children: React.ReactNode;
}

const TagList: React.FC<Props> = (props) => {
  return <div className="tag-list">{props.children}</div>;
};

export default TagList;
