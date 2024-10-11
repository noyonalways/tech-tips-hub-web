interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <div className="max-w-6xl mx-auto px-2 lg:px-0">{children}</div>;
};

export default Container;
