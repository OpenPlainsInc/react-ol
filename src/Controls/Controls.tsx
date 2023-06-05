import { ReactNode } from "react";

interface ControlProps {
  children?: ReactNode;
}

const Controls = ({ children } : ControlProps) => {
  return <div>{children}</div>;
};
export default Controls;