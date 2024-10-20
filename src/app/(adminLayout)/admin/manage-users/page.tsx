import DashboardTitle from "@/components/dashboard-title";
import UsersTable from "@/components/users-table";

interface IProps {}

const ManageUsersPage = async ({}: IProps) => {
  

  return (
    <div>
      <DashboardTitle title="Manage Users" />
      <UsersTable/>
    </div>
  );
};

export default ManageUsersPage;
