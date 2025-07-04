import BlogCard from "@/components/blog-card";
import FollowingFeedPosts from "@/components/modules/following-feed";
import { getFollowingUsersPosts } from "@/services/post";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Following Feed",
  description:
    "Stay updated with the latest tech tips, tutorials, and articles. Explore our feed to discover trending posts and expert insights across various technology topics.",
  keywords:
    "TechTips Hub, tech feed, latest articles, tutorials, technology, programming, web development, software, gadgets",
  openGraph: {
    title: "Feed",
    description:
      "Discover the latest tech tips, tutorials, and trends on the TechTips Hub feed. Stay informed with expert insights and curated content.",
  },
};

interface IProps {
  searchParams: {
    search: string;
    category: string;
  };
}

export default async function FollowingUsersPosts({ searchParams }: IProps) {
  const params = searchParams
    ? { searchTerm: searchParams.search, category: searchParams.category }
    : undefined;

  const data = await getFollowingUsersPosts(params);
  const posts = data?.data as IPost[];

  return <FollowingFeedPosts initialPosts={posts} />;
}
