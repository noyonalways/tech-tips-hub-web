import WriteBlog from "@/components/modules/write-blog";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write Blog | TechTips Hub",
  description: "Write a blog post on TechTips Hub",
  keywords: "write blog, tech tips, TechTips Hub, blog, write, post",
  openGraph: {
    title: "Write Blog | TechTips Hub",
    description: "Write a blog post on TechTips Hub",
    url: "https://techtipshub.vercel.app/write-blog",
  },  
  twitter: {
    card: "summary_large_image",
    title: "Write Blog | TechTips Hub",
    description: "Write a blog post on TechTips Hub",
    images: "https://techtipshub.vercel.app/og-image.png",
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
