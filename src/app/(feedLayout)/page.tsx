import BlogCard from "@/components/blog-card";
import MiniFooter from "@/components/shared/mini-footer";
import Container from "@/components/ui/container";
import { Button } from "@nextui-org/button";
import { PiMagicWandLight, PiUsers } from "react-icons/pi";

const topics = [
  "Programming",
  "Development",
  "Python",
  "NodeJS",
  "PHP",
  "TypeScript",
];

export default function Home() {
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
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <div className="hidden lg:inline-block basis-[25%] space-y-6  sticky top-20">
            <div className="border border-default/50 p-6 rounded-xl space-y-2">
              <h2 className="font-semibold text-lg">Topics</h2>
              <div className="gap-2 flex flex-wrap">
                {topics.map((topic, index) => (
                  <Button key={index} variant="flat" radius="full" size="sm">
                    {topic}
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