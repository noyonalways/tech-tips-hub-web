import QuillEditor from "@/components/quill-editor";
import Container from "@/components/ui/container";

interface IProps {}

const WriteBlogPage = ({}: IProps) => {
  return (
    <section className="py-10">
      <Container>
        <div>
          <QuillEditor />
        </div>
      </Container>
    </section>
  );
};

export default WriteBlogPage;