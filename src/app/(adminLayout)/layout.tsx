import AdminSidebar from "@/components/shared/admin-sidebar";
import NavarDropdown from "@/components/ui/navbar-dropdown";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <div className="flex">
        <div className="basis-[20%] p-6 border-r border-default/50 h-screen">
          <AdminSidebar />
        </div>
        <div className="p-6 flex-1">
          <div className="hidden lg:justify-end lg:flex">
            <NavarDropdown />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
