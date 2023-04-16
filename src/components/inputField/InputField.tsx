import "./InputField.css";
import { FunctionComponent } from "react";

interface InputFieldProps {
  error?: string;
  label: string;
  name: string;
  onBlur?: (e: any) => void;
  onChange: (e: any) => void;
  touched?: boolean;
  type?: string;
  value: string;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  error,
  label,
  name,
  onBlur,
  onChange,
  touched,
  type = "text",
  value,
}) => {
  return (
    <div className="InputField">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && touched && <p className="error">{error}</p>}
    </div>
  );
};

export default InputField;
