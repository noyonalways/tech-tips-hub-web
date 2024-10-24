import PageTitle from "@/components/modules/settings/page-title";
import Container from "@/components/ui/container";

interface IProps {}

const ManageBlogs = ({}: IProps) => {
  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-2 lg:px-0">
        <PageTitle title="Manage Blogs" description="Manage your all blogs" />

      </div>
    </section>
  );
};

export default ManageBlogs;