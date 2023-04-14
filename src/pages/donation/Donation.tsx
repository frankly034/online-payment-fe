import { Message } from "../../components";

const Donation = () => {
  const data = {
    name: "John Doe",
    amount: 1000000,
  };

  const messageStr = `Dear ${
    data?.name
  }, your donation of ${new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "NGR",
  }).format(data?.amount / 100)} was received with thanks ❤️.`;

  return <Message title="Donation" description={messageStr} />;
};

export default Donation;
