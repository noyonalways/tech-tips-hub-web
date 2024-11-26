import { FeedButtonsForSideBar, FeedButtonsForSmallDevice } from "@/components/modules/feed/feed-buttons";
import MiniFooter from "@/components/shared/mini-footer";
import { Navbar } from "@/components/shared/navbar";
import CategoryButton from "@/components/ui/category-button";
import Container from "@/components/ui/container";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { IoDiamondOutline } from "react-icons/io5";

interface IProps {
  children: React.ReactNode;
}

const FeedLayout = async ({ children }: IProps) => {
  const categoryData = await getAllCategories();
  const categories = categoryData?.data as ICategory[];
  return (
    <>
      <Navbar />
      <section className="">
        <div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-start space-x-4 w-full">
            {/* Left side bar */}
            <div className="hidden lg:flex basis-[18%] space-y-6 sticky top-16  lg:p-4 lg:pt-2 border-r border-default/50">
              <div className="flex flex-col h-[calc(100vh-90px)]">
                <div className="space-y-2 flex-1">
                  <h3>Feed</h3>
                  <div className="flex flex-col space-y-2">
                    <FeedButtonsForSideBar />
                  </div>
                </div>

                <div className="p-4 border border-default/50 rounded-xl">
                  <h3 className="text-lg font-medium">Upgrade to Premium</h3>
                  <p className="mb-2">
                    Get access to expert pet care tips and special content just
                    for premium members.
                  </p>
                  <Button
                    size="sm"
                    href="/subscriptions"
                    as={Link}
                    startContent={<IoDiamondOutline />}
                    radius="sm"
                    color="primary"
                  >
                    Go Premium
                  </Button>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="basis-[40%] py-4">
              <div className="flex items-center space-x-4 mb-4 lg:hidden">
                <FeedButtonsForSmallDevice />
              </div>
              {children}
            </div>

            {/* Right side bar */}
            <div className="hidden lg:inline-block basis-[18%] space-y-6 sticky top-16  lg:p-4 lg:pt-4">
              <div className="border border-default/50 p-6 rounded-xl space-y-2">
                <h2 className="font-semibold text-lg">Categories</h2>
                <div className="gap-2 flex flex-wrap">
                  {categories?.map((category) => (
                    <CategoryButton key={category._id} {...category} />
                  ))}
                </div>
              </div>
              <MiniFooter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedLayout;
