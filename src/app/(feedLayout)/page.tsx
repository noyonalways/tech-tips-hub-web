import BlogCard from "@/components/blog-card";
import FeedPosts from "@/components/modules/feed";
import { getAllPosts } from "@/services/post";
import { IPost } from "@/types";
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
    url: "https://techtipshub.noyonrahman.xyz",
    images: [
      {
        url: "https://i.ibb.co.com/TtgyZCV/Copy-of-Add-a-heading.png",
      },
    ],
  },
};

interface IProps {
  searchParams: {
    search: string;
    category: string;
  };
}

const INITIAL_NUMBERS_OF_POSTS = "5";

export default async function Home({ searchParams }: IProps) {
  const params = searchParams
    ? {
        searchTerm: searchParams.search,
        category: searchParams.category,
        limit: INITIAL_NUMBERS_OF_POSTS,
      }
    : undefined;

  const data = await getAllPosts(params);
  const posts = data?.data as IPost[];

  return <FeedPosts initialPosts={posts} />;
}
