import { useLocation } from "react-router-dom";
import { Message } from "../../components";
import { useVerifyPayment } from "../../hooks";
import { useMemo } from "react";
import { koboToNairaString } from "../../utils";

const Donation = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const reference = query.get("reference") as string;

  const { data, error, isLoading } = useVerifyPayment(reference);

  const messageStr = useMemo(() => {
    if (data) {
      return `Dear ${data?.name}, your donation of ${koboToNairaString(
        data.amount
      )} was received with thanks ❤️.`;
    }

    if (error) {
      return `Your donation was not successful ❤️‍🩹. ${error.response?.data?.message}.`;
    }

    return "Processing...";
  }, [data, error, isLoading]);

  return <Message title="Donation" description={messageStr} />;
};

export default Donation;
