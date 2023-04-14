import { FunctionComponent } from "react";
import { Card, Form, FormConfig } from "../../components";
import donateValidationSchema from "./donateValidationSchema";

const defaultValues = {
  amount: "",
  email: "",
  name: "",
};

const formConfig: FormConfig[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Amount (Naira)",
    name: "amount",
    type: "number",
  },
];

const Donate: FunctionComponent = () => {
  const handleSubmit = (values: Record<string, string>) => {
    console.log("Submitting...", values);
  };

  return (
    <Card className="donate">
      <Form
        buttonText="Donate"
        config={formConfig}
        defaultValues={defaultValues}
        isLoading={false}
        onSubmit={handleSubmit}
        validationSchema={donateValidationSchema}
      />
    </Card>
  );
};

export default Donate;
