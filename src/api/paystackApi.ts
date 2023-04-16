import axios, { AxiosInstance } from "axios";
import { InitializedPayment, VerifiedPayment } from "../models";

export interface InitializePaymentArgs {
  amount: number;
  email: string;
  name: string;
}

interface InitializePaymentResponse {
  data: InitializedPayment;
}

interface VerifyPaymentResponse {
  data: VerifiedPayment;
}

class PaystackApi {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
  }

  initializePayment = async (paymentDetails: InitializePaymentArgs) => {
    const data = {
      ...paymentDetails,
      amount: paymentDetails.amount * 100,
      callbackUrl: new URL(
        import.meta.env.VITE_PAYMENT_VERIFICATION_URL
      ).toString(),
    };

    const {
      data: { data: initializePayment },
    } = await this.axiosInstance.post<InitializePaymentResponse>(
      "/paystack/initialize",
      data
    );

    return initializePayment;
  };

  verifyPayment = async (reference: string) => {
    const {
      data: { data: verifyPayment },
    } = await this.axiosInstance.get<VerifyPaymentResponse>(
      "/paystack/verify",
      { params: { reference } }
    );

    return verifyPayment;
  };
}

const paystackApi = new PaystackApi();

export default paystackApi;
