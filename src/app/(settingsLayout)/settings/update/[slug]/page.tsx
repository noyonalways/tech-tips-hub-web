import PageTitle from "@/components/modules/settings/page-title";
import UpdateBlog from "@/components/modules/update-blog";
import { getPostBySlug } from "@/services/post";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Blog - Tech Tips Hub",
  description: "Edit and update your blog content on Tech Tips Hub.",
  keywords: "Update Blog, Edit Blog, Tech Tips Hub, Blogging",
};

interface IProps {
  params: {
    slug: string;
  };
}

const UpdateSingleBlog = async ({ params }: IProps) => {
  const data = await getPostBySlug(params?.slug);
  const post = (data?.data as IPost) ?? {};


  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-2 lg:px-0 relative">
        <PageTitle title="Update Blog" description="Update a single blog" />

        <UpdateBlog post={post} />
      </div>
    </section>
  );
};

export default UpdateSingleBlog;
