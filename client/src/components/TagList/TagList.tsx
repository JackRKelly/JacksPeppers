import React, { ReactNode, FC } from "react";
import "./index.scss";

interface Props {
  children: ReactNode;
}

const TagList: FC<Props> = (props) => {
  return <div className="tag-list">{props.children}</div>;
};

export default TagList;
