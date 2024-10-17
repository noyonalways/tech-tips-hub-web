import { IPost } from "@/types";

interface IProps {
  post: IPost
}

const PrintBlog = ({post}: IProps) => {
  return (
    <div>
      <h1>Component</h1>
    </div>
  );
};

export default PrintBlog;