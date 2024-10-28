import WriteBlog from "@/components/modules/write-blog";
import Container from "@/components/ui/container";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Write a Blog",
  description:
    "Create and share your knowledge by writing a blog on Tech Tips Hub. Share insights, tips, and updates on tech trends.",
  keywords:
    "Tech Tips Hub, write blog, tech tips, tutorials, share insights, technology trends",
  openGraph: {
    title: "Write a Blog | Tech Tips Hub",
    description:
      "Create and share your knowledge by writing a blog on Tech Tips Hub. Share insights, tips, and updates on tech trends.",
    url: "https://techtipshub.noyonrahman.xyz/blogs/write-blog",
  },
};

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