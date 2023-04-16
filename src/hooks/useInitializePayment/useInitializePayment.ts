import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { InitializePaymentArgs, paystackApi } from "../../api";
import { AxiosError } from "axios";
import { ApiError, InitializedPayment } from "../../models";

const initializePayment = (paymentDetails: InitializePaymentArgs) =>
  paystackApi.initializePayment(paymentDetails);

const useInitializePayment = (
  config?: UseMutationOptions<
    InitializedPayment,
    AxiosError<ApiError>,
    InitializePaymentArgs
  >
) => useMutation(initializePayment, config);

export default useInitializePayment;
