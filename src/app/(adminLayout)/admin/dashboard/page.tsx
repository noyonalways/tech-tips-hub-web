import DashboardTitle from "@/components/dashboard-title";
import DashboardContent from "@/components/modules/admin/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Manage your administrative tasks and insights on Tech Tips Hub from the dashboard.",
  keywords: "Admin Dashboard, Tech Tips Hub, admin panel, management, insights",
};

interface IProps {}

const AdminDashboard: React.FC<IProps> = () => {
  return (
    <div>
      <DashboardTitle title="Dashboard" />
      <DashboardContent />
    </div>
  );
};

export default AdminDashboard;
