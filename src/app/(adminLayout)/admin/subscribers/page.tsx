import DashboardTitle from "@/components/dashboard-title";
import SubscribersTable from "@/components/subscribers-table";

interface IProps {}

const SubscribersPage = ({}: IProps) => {
  return (
    <div>
      <DashboardTitle title="All Subscribers" />
      <SubscribersTable />
    </div>
  );
};

export default SubscribersPage;