import { FunctionComponent } from "react";
import { Card, Form, FormConfig } from "../../components";
import donateValidationSchema from "./donateValidationSchema";
import { useInitializePayment } from "../../hooks";
import { InitializePaymentArgs } from "../../api";

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
  const {
    isLoading,
    isSuccess,
    mutate: initializePayment,
  } = useInitializePayment({
    onSuccess: (data) => window.location.assign(data.authorizationUrl),
    onError: () => window.alert("An error occured."),
  });
  const handleSubmit = (paymentDetails: InitializePaymentArgs) => {
    initializePayment(paymentDetails);
  };

  return (
    <Card className="donate">
      <Form
        buttonText="Donate"
        config={formConfig}
        defaultValues={defaultValues}
        isLoading={isLoading || isSuccess}
        onSubmit={handleSubmit}
        validationSchema={donateValidationSchema}
      />
    </Card>
  );
};

export default Donate;
