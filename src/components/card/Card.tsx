import "./Card.css";
import { FunctionComponent, ReactElement } from "react";

interface CardProps {
  children?: ReactElement;
  className?: string;
}
const Card: FunctionComponent<CardProps> = ({ children, className }) => {
  return <div className={`Card ${className ? className : ""}`}>{children}</div>;
};

export default Card;
