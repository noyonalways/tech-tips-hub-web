import { IUser } from "./user.type";

export type TSubscriptionStatus = "Pending" | "Active" | "Expired" | "Canceled";

export interface ISubscription {
  _id: string;
  user: IUser;
  type: string;
  startDate: string;
  endDate: string;
  status: TSubscriptionStatus;
  price: number;
  currency: string;
  transactionId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
