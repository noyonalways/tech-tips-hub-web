import WriteBlog from "@/components/modules/write-blog";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write Blog | TechTipsHub",
  description: "Write a blog post on TechTipsHub",
  keywords: "write blog, tech tips, TechTipsHub, blog, write, post",
  openGraph: {
    title: "Write Blog | TechTipsHub",
    description: "Write a blog post on TechTipsHub",
    url: "https://techtipshub.noyonrahman.xyz/write-blog",
  },  
  twitter: {
    card: "summary_large_image",
    title: "Write Blog | TechTipsHub",
    description: "Write a blog post on TechTipsHub",
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
