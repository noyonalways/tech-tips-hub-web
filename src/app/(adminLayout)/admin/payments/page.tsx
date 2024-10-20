import DashboardTitle from "@/components/dashboard-title";
import PaymentsTable from "@/components/payments-table";

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