import { FunctionComponent } from "react";
import { Button, InputField } from "..";
import { useFormik } from "formik";
import { ObjectSchema } from "yup";

export interface FormConfig {
  name: string;
  type: string;
  label: string;
}

interface FormProps {
  buttonText?: string;
  config: FormConfig[];
  defaultValues: Record<string, string>;
  isLoading?: boolean;
  onSubmit: (data: any) => void;
  validationSchema: ObjectSchema<object>;
}

// Formik inspired form builder
const Form: FunctionComponent<FormProps> = ({
  buttonText,
  config,
  defaultValues,
  isLoading,
  onSubmit,
  validationSchema,
}) => {
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {config.map(({ label, name, type }) => (
        <InputField
          key={name}
          label={label}
          name={name}
          type={type}
          value={formik.values[name]}
          error={formik.errors[name]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          touched={formik.touched[name]}
        />
      ))}
      <div className="button-container">
        <Button
          isLoading={isLoading}
          onClick={formik.submitForm}
          text={buttonText || "Submit"}
          type="button"
        />
      </div>
    </form>
  );
};

export default Form;
