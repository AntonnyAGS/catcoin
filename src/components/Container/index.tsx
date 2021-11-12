import React from "react";

import "./style.css";

interface ContainerProps {
  children: JSX.Element;
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="container">{children}</div>;
};

export default Container;