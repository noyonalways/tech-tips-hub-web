import DashboardTitle from "@/components/dashboard-title";
import PaymentsTable from "@/components/payments-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Payments | Admin Dashboard",
  description:
    "View and manage all payment transactions in the admin dashboard.",
  keywords:
    "payments, transactions, admin, manage payments, payment history, dashboard",
};

interface IProps {}

const PaymentsPage = ({}: IProps) => {
  return (
    <div>
      <DashboardTitle title="All Payments" />
      <PaymentsTable />
    </div>
  );
};

export default PaymentsPage;