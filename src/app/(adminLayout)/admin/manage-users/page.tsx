import DashboardTitle from "@/components/dashboard-title";
import UsersTable from "@/components/users-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Users | Admin Dashboard",
  description:
    "Admin panel for managing user accounts, permissions, and access controls.",
  keywords: "admin, manage users, user management, access control, dashboard",
};

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
