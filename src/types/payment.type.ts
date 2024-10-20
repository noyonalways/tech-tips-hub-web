import { ISubscription } from "./subscription.type";
import { IUser } from "./user.type";

export type TPaymentStatus = "Pending" | "Paid" | "Failed" | "Canceled";

export interface IPayment {
  _id: string;
  transactionId: string;
  user: IUser;
  subscription: ISubscription;
  paymentMethod: string;
  amount: number;
  currency: string;
  status: TPaymentStatus;
  paidAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


