import WriteBlog from "@/components/modules/write-blog";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write Blog | Tech Tips Hub",
  description: "Write a blog post on Tech Tips Hub",
  keywords: "write blog, tech tips, tech tips hub, blog, write, post",
  openGraph: {
    title: "Write Blog | Tech Tips Hub",
    description: "Write a blog post on Tech Tips Hub",
    url: "https://techtipshub.noyonrahman.xyz/write-blog",
  },  
  twitter: {
    card: "summary_large_image",
    title: "Write Blog | Tech Tips Hub",
    description: "Write a blog post on Tech Tips Hub",
    images: "https://techtipshub.noyonrahman.xyz/og-image.png",
  },
};

const WriteBlogPage = () => {
  return (
    <section className="py-10">
      <Container>
        <WriteBlog />
      </Container>
    </section>
  );
};

export default WriteBlogPage;
