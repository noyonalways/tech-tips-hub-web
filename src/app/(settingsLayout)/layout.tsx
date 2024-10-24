import { Navbar } from "@/components/shared/navbar";
import UserSidebar from "@/components/shared/user-sidebar";


interface IProps {
  children: React.ReactNode;
}

const SettingsLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="lg:flex">
        <UserSidebar />

        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default SettingsLayout;
