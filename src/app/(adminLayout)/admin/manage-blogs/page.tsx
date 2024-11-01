import BlogsTable from "@/components/blogs-table";
import DashboardTitle from "@/components/dashboard-title";

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