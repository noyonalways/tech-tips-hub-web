import Container from "@/components/ui/container";
import FollowButton from "@/components/ui/follow-button";
import { getPostBySlug } from "@/services/post";
import { IPost } from "@/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import type { Metadata } from "next";
import Link from "next/link";
import { AiOutlineComment } from "react-icons/ai";
import { BiBookmark, BiDownvote, BiUpvote } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineDownload } from "react-icons/md";
import { PiShareNetwork } from "react-icons/pi";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPostBySlug(params.slug);
  const { title } = (data?.data as IPost) ?? {};

  return {
    title: title,
  };
}

const DynamicBlogPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getPostBySlug(params.slug);
  const {
    coverImage,
    title,
    author,
    createdAt,
    isPremium,
    content,
    tags,
    totalViews,
  } = (data?.data as IPost) ?? {};

  return (
    <section className="pb-10">
      <Container>
        <div className="space-y-4">
          <div className="flex justify-center mt-4 w-full">
            <Image className="w-full" src={coverImage} />
          </div>
          <div className="space-y-14">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-center">
                {title}
              </h1>
              <div className="flex justify-center items-center space-x-2 lg:space-x-4 mx-auto w-full max-w-xl">
                <Link
                  href={`/users/@${author.username}`}
                  className="flex items-center space-x-4"
                >
                  <Avatar
                    className="size-12 object-cover"
                    radius="full"
                    src={author?.profilePicture}
                    name={author.fullName}
                    isBordered
                  />
                  <h3 className="font-medium text-sm lg:text-lg">
                    {author?.fullName}
                  </h3>
                </Link>
                <span className="text-default-500">-</span>
                <div className="text-default-500 text-xs lg:text-base">
                  {new Date(createdAt)?.toDateString()}
                </div>

                <FollowButton id={author._id} />
              </div>

              {
                <div className={`flex justify-center items-center space-x-4`}>
                  {isPremium && (
                    <Button
                      color="secondary"
                      variant="flat"
                      radius="full"
                      startContent={<IoDiamondOutline className="text-lg" />}
                    >
                      Premium Content
                    </Button>
                  )}
                  {totalViews > 0 && (
                    <Button size="md" variant="flat" radius="full">
                      {totalViews} Views
                    </Button>
                  )}
                </div>
              }
            </div>

            <p className="text-default-600 text-base lg:text-lg">{content}</p>

            <div className="space-y-10">
              <div className="border border-default/50 py-2 px-2 rounded-full w-full max-w-fit mx-auto flex justify-center items-center">
                <div className="border-r border-default/30 ">
                  <Button
                    className="text-3xl mr-2"
                    size="lg"
                    radius="full"
                    variant="light"
                    isIconOnly
                  >
                    <BiDownvote className="text-lg" />
                  </Button>
                </div>

                <div className="border-r border-default/30 ">
                  <Button
                    className="text-3xl mx-2"
                    size="lg"
                    radius="full"
                    variant="light"
                    isIconOnly
                  >
                    <BiUpvote className="text-lg" />
                  </Button>
                </div>

                <div className="border-r border-default/30 ">
                  <Button
                    className="text-2xl mx-2"
                    variant="light"
                    isIconOnly
                    radius="full"
                    size="lg"
                  >
                    <AiOutlineComment />
                  </Button>
                </div>

                <div className="border-r border-default/30">
                  <Button
                    className="text-2xl mx-2"
                    variant="light"
                    isIconOnly
                    radius="full"
                    size="lg"
                  >
                    <BiBookmark />
                  </Button>
                </div>

                <div className="border-r border-default/30">
                  <Button
                    className="text-2xl mx-2"
                    variant="light"
                    isIconOnly
                    radius="full"
                    size="lg"
                  >
                    <PiShareNetwork />
                  </Button>
                </div>

                <div>
                  <Button
                    className="text-2xl ml-2"
                    variant="light"
                    isIconOnly
                    radius="full"
                    size="lg"
                  >
                    <MdOutlineDownload />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center w-full max-w-3xl flex-wrap mx-auto">
                {tags.map((tag) => (
                  <Button key={tag} variant="flat" radius="sm" size="sm">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicBlogPage;
