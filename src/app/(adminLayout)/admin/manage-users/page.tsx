import DashboardTitle from "@/components/dashboard-title";
import UsersTable from "@/components/users-table";
import { getAllUsers } from "@/services/user";
import { IUser } from "@/types";

interface IProps {}

const ManageUsersPage = async ({}: IProps) => {
  const usersData = await getAllUsers();
  const users = (usersData?.data) as IUser[];

  return (
    <div>
      <DashboardTitle title="Manage Users" />

      <UsersTable users={users} />
    </div>
  );
};

export default ManageUsersPage;
