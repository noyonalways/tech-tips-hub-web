export interface ISubscription {
  _id: string;
  user: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  price: number;
  currency: string;
  transactionId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
