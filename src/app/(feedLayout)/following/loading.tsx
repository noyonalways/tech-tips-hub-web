import BlogCardSkeleton from "@/components/blog-card/skeleton";

const FollowingFeedLoading = () => {
  return (
    <div className="flex-1 space-y-6 w-full">
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
};

export default FollowingFeedLoading;
