interface IProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default AdminLayout;
