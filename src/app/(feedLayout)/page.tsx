import BlogCard from "@/components/blog-card";
import { getAllPosts } from "@/services/post";
import {  IPost } from "@/types";
import { delay } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed",
  description:
    "Stay updated with the latest tech tips, tutorials, and articles. Explore our feed to discover trending posts and expert insights across various technology topics.",
  keywords:
    "Tech Tips Hub, tech feed, latest articles, tutorials, technology, programming, web development, software, gadgets",
  openGraph: {
    title: "Feed",
    description:
      "Discover the latest tech tips, tutorials, and trends on the Tech Tips Hub feed. Stay informed with expert insights and curated content.",
  },
};

interface IProps {
  searchParams: {
    search: string;
    category: string;
  };
}

export default async function Home({ searchParams }: IProps) {
  const params = searchParams
    ? { searchTerm: searchParams.search, category: searchParams.category }
    : undefined;

  const data = await getAllPosts(params);
  const posts = data?.data as IPost[];

  return (
    <div className="space-y-6 flex-1 w-full">
      {posts?.map((post) => (
        <BlogCard key={post?._id} {...post} />
      ))}
    </div>
  );
}
