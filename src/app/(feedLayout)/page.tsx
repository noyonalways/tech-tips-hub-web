import BlogCard from "@/components/blog-card";
import MiniFooter from "@/components/shared/mini-footer";
import Container from "@/components/ui/container";
import { getAllCategories } from "@/services/category";
import { getAllPosts } from "@/services/post";
import { ICategory, IPost } from "@/types";
import { Button } from "@nextui-org/button";
import { Metadata } from "next";
import { PiMagicWandLight, PiUsers } from "react-icons/pi";

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

export default async function Home() {
  const data = await getAllPosts();
  const posts = data?.data as IPost[];

  const categoryData = await getAllCategories();
  const categories = categoryData?.data as ICategory[];

  return (
    <section className="py-8">
      <Container>
        <div className="flex items-center space-x-4">
          <Button
            variant="flat"
            color="primary"
            radius="full"
            startContent={<PiMagicWandLight className="text-lg" />}
          >
            Personalized
          </Button>
          <Button
            variant="light"
            radius="full"
            startContent={<PiUsers className="text-lg" />}
          >
            Following
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-6 items-start mt-8 w-full">
          <div className="space-y-6 flex-1 w-full">
            {posts?.map((post) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>

          <div className="hidden lg:inline-block basis-[25%] space-y-6  sticky top-20">
            <div className="border border-default/50 p-6 rounded-xl space-y-2">
              <h2 className="font-semibold text-lg">Categories</h2>
              <div className="gap-2 flex flex-wrap">
                {categories?.map((category) => (
                  <Button
                    key={category._id}
                    variant="flat"
                    radius="full"
                    size="sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <MiniFooter />
          </div>
        </div>
      </Container>
    </section>
  );
}
