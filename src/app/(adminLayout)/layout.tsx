'use client'

import AdminSidebar from "@/components/shared/admin-sidebar";
import NavarDropdown from "@/components/ui/navbar-dropdown";
import { useParams, usePathname } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <main>
      <div className="flex flex-col lg:flex-row">
        <>
          <AdminSidebar />
        </>

        <div className="flex-1">
          <div className="hidden lg:flex justify-between items-center border-b border-default/50 lg:px-8 sticky top-0 bg-background z-50">
            <div className="flex items-center lg:py-6 space-x-2">
              <span className="text-gray-500">Admin</span>
              <span><BiChevronRight /></span>
              <span className="text-gray-500 capitalize">
                {/* manage-users */}
                {pathname?.replace('/admin/', '')?.replace("-", " ") || 'Dashboard'}
              </span>
            </div>
            <NavarDropdown />
          </div>
          <div className="lg:px-8 pt-4 pb-6 px-4 mt-20 lg:mt-0">{children}</div>
        </div>

        {/* <div className="pt-20 px-2 pb-2 lg:p-6 flex-1">
          <div className="hidden lg:justify-end lg:flex border-b">
            <NavarDropdown />
          </div>
          {children}
        </div> */}
      </div>
    </main>
  );
};

export default AdminLayout;
