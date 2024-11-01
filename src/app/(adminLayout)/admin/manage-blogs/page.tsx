import BlogsTable from "@/components/blogs-table";
import DashboardTitle from "@/components/dashboard-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Blogs | Admin Dashboard",
  description:
    "Admin panel for managing blogs, permissions, and access controls.",
  keywords: "admin, manage users, user management, access control, dashboard",
};

interface IProps {}

const ManageBlogs = ({}: IProps) => {
  return (
    <div>
      <DashboardTitle title="Manage Blogs" />
      <BlogsTable />
    </div>
  );
};

export default ManageBlogs;