import CommentCard from "@/components/comment-card";
import CommentForm from "@/components/modules/post/comment-form";
import ShowHTMLFormat from "@/components/modules/post/show-html-format";
import BlogShareDropdown from "@/components/ui/blog-share-dropdown";
import Container from "@/components/ui/container";
import DownVoteButton from "@/components/ui/downvote-button";
import FollowUnFollowButton from "@/components/ui/follow-unfollow-button";
import PrintBlogButton from "@/components/ui/print-blog-button";
import UpVoteButton from "@/components/ui/upvote-button";
import { poppins } from "@/config/fonts";
import { getCommentsByPostId, getPostBySlug } from "@/services/post";
import { IPost } from "@/types";
import { IComment } from "@/types/comment.type";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import type { Metadata } from "next";
import Link from "next/link";
import { AiOutlineComment } from "react-icons/ai";
import { BiBookmark, BiDownvote, BiUpvote } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPostBySlug(params?.slug);
  const { title, content, coverImage } = (data?.data as IPost) ?? {};

  const description = content?.substring(0, 150) + "...";
  const blogUrl = `https://techtipshub.noyonrahman.xyz/blogs/${params?.slug}`;

  return {
    title: title,
    description: description,
    keywords: `${title}, Tech Tips Hub, blog post, technology, tutorial`,
    openGraph: {
      title: title,
      description: description,
      url: blogUrl,
      images: [{ url: coverImage }],
      siteName: "Tech Tips Hub",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [coverImage],
    },
  };
}

const DynamicBlogPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getPostBySlug(params?.slug);
  const {
    _id,
    coverImage,
    title,
    author,
    contentType,
    createdAt,
    isPremium,
    content,
    tags,
    totalViews,
    upVotes,
    downVotes,
    totalComments,
    slug,
  } = (data?.data as IPost) ?? {};

  let comments;
  if (data?.success) {
    const res = await getCommentsByPostId(_id);
    comments = res?.data as IComment[];
  }

  return (
    <section className="pb-10">
      <Container>
        <>
          {!data?.success ? (
            <>
              {data?.statusCode === 401 && (
                <div className="text center space-y-4 w-full flex flex-col items-center justify-center h-[calc(100vh-410px)]">
                  <p className="text-center text-default-600">
                    Accessing premium content requires logging in.
                  </p>
                  <Button
                    as={Link}
                    href={`/login?redirect=blogs/${params?.slug}`}
                    radius="full"
                    variant="solid"
                    color="primary"
                  >
                    Login
                  </Button>
                </div>
              )}
              {data?.statusCode === 403 && (
                <div className="text center space-y-4 w-full flex flex-col items-center justify-center h-[calc(100vh-410px)]">
                  <p className="text-center text-default-600">
                    {data?.message}
                  </p>
                  <Button
                    as={Link}
                    href="/subscriptions"
                    radius="full"
                    variant="solid"
                    color="primary"
                  >
                    Get Premium
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center mt-4 w-full print:max-w-xl print:mx-auto">
                <Image
                  className="w-full"
                  src={coverImage}
                  alt={`${title}-cover-image`}
                />
              </div>
              <div className="space-y-14 print:space-y-8">
                <div className="space-y-6">
                  <h1
                    className={`${poppins.className} text-3xl lg:text-4xl font-bold text-center`}
                  >
                    {title}
                  </h1>
                  <div className="flex justify-center items-center space-x-2 lg:space-x-4 mx-auto w-full max-w-xl">
                    <Link
                      href={`/users/@${author?.username}`}
                      className="flex items-center space-x-4"
                    >
                      <Avatar
                        className="size-12 object-cover"
                        radius="full"
                        src={author?.profilePicture}
                        name={author?.fullName}
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

                    <div className="print:hidden">
                      <FollowUnFollowButton id={author?._id} />
                    </div>
                  </div>

                  <div
                    className={`flex flex-col lg:flex-row justify-center items-center gap-4 print:hidden`}
                  >
                    <div className="flex items-center space-x-2">
                      {isPremium && (
                        <Button
                          color="secondary"
                          variant="flat"
                          radius="full"
                          startContent={
                            <IoDiamondOutline className="text-lg" />
                          }
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

                    <div className="flex items-center space-x-2 print:hidden">
                      <Button
                        size="md"
                        variant="light"
                        radius="full"
                        startContent={<BiDownvote />}
                      >
                        {downVotes} votes
                      </Button>
                      <Button
                        size="md"
                        variant="light"
                        radius="full"
                        startContent={<BiUpvote />}
                      >
                        {upVotes} votes
                      </Button>
                      <Button
                        size="md"
                        variant="light"
                        radius="full"
                        startContent={<AiOutlineComment />}
                      >
                        {totalComments} comments
                      </Button>
                    </div>
                  </div>
                </div>

                {(contentType === "html" && (
                  <ShowHTMLFormat content={content} />
                )) ||
                  (contentType === "text" && (
                    <p className="text-default-600 text-base lg:text-lg whitespace-pre-line">
                      {content}
                    </p>
                  ))}

                <div className="space-y-10">
                  <div className="border border-default/50 py-2 px-2 rounded-full w-full max-w-fit mx-auto flex justify-center items-center print:hidden">
                    <div className="border-r border-default/30 ">
                      <DownVoteButton
                        postId={_id}
                        className="text-3xl mr-2"
                        radius="full"
                        variant="light"
                        isIconOnly
                        slug={slug}
                      >
                        <BiDownvote className="text-lg" />
                      </DownVoteButton>
                    </div>

                    <div className="border-r border-default/30 ">
                      <UpVoteButton
                        postId={_id}
                        className="text-3xl mx-2"
                        radius="full"
                        variant="light"
                        isIconOnly
                        slug={slug}
                      >
                        <BiUpvote className="text-lg" />
                      </UpVoteButton>
                    </div>

                    <div className="border-r border-default/30 ">
                      <Button
                        className="text-2xl mx-2"
                        variant="light"
                        isIconOnly
                        radius="full"
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
                      >
                        <BiBookmark />
                      </Button>
                    </div>

                    <div className="border-r border-default/30">
                      <BlogShareDropdown />
                    </div>

                    <div>
                      <PrintBlogButton blog={data?.data} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 justify-center w-full max-w-3xl flex-wrap mx-auto">
                    {tags?.map((tag) => (
                      <Button key={tag} variant="flat" radius="sm" size="sm">
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* comments */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                  <CommentForm postId={_id} slug={slug} />

                  <div className="mt-8 space-y-4">
                    {comments &&
                      comments?.map((comment) => (
                        <CommentCard key={comment._id} {...comment} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </Container>
    </section>
  );
};

export default DynamicBlogPage;
