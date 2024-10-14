import { ISubscription } from "./subscription.type";
import { IUser } from "./user.type";

export interface IPayment {
  _id: string;
  transactionId: string;
  user: IUser;
  subscription: ISubscription;
  paymentMethod: string;
  amount: number;
  currency: string;
  status: string;
  paidAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


