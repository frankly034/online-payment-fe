import './Button.css';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ButtonArgs {
  isLoading?: boolean;
  onClick?: (e: any) => void;
  text: string;
  to?: string;
  type: 'button' | 'link' | 'submit';
}
const Button: FunctionComponent<ButtonArgs> = ({
  isLoading,
  onClick,
  text,
  to = '#',
  type = 'button',
}) => {
  return type === 'link' ? (
    <Link to={to} className="Button">
      {text}
    </Link>
  ) : (
    <button disabled={isLoading} type={type} onClick={onClick && onClick}>
      {isLoading ? 'Loading...' : text}
    </button>
  );
};

export default Button;
