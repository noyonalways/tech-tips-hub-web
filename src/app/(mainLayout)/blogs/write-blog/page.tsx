import WriteBlog from "@/components/modules/write-blog";
import Container from "@/components/ui/container";

interface IProps {}

const WriteBlogPage = ({}: IProps) => {
  return (
    <section className="py-10">
      <Container>
        <>
          <WriteBlog />
        </>
      </Container>
    </section>
  );
};

export default WriteBlogPage;