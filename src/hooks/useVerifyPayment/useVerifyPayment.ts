import { useQuery } from "@tanstack/react-query";
import { paystackApi } from "../../api";
import { ApiError, VerifiedPayment } from "../../models";
import { AxiosError } from "axios";

const useVerifyPayment = (reference: string) =>
  useQuery<VerifiedPayment, AxiosError<ApiError>, VerifiedPayment>(
    ["verifyPayment", reference],
    () => paystackApi.verifyPayment(reference),
    { enabled: !!reference }
  );

export default useVerifyPayment;
