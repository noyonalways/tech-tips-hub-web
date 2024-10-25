import BlogCard from "@/components/blog-card";
import PageTitle from "@/components/modules/settings/page-title";
import { getLoggedInUserBlogs } from "@/services/post";
import { IPost } from "@/types";

interface IProps {}

const ManageBlogs = async ({}: IProps) => {
  const res = await getLoggedInUserBlogs();
  const blogs = res?.data as IPost[];

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-2 lg:px-0">
        <PageTitle title="Manage Blogs" description="Manage your all blogs" />

        <div className="space-y-4">
          {blogs && blogs?.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </section>  
  );
};

export default ManageBlogs;
