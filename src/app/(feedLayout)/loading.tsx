import BlogCardSkeleton from "@/components/blog-card/skeleton";

interface IProps {}

const FeedLoading = ({}: IProps) => {
  return (
    <div className="flex-1 space-y-6 w-full">
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
};

export default FeedLoading;