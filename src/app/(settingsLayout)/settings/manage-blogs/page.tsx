import PageTitle from "@/components/modules/settings/page-title";
import Container from "@/components/ui/container";

interface IProps {}

const ManageBlogs = ({}: IProps) => {
  return (
    <section className="pt-10">
      <Container>
        <PageTitle title="Manage Blogs" description="Manage your all blogs" />
      </Container>
    </section>
  );
};

export default ManageBlogs;