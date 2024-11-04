import MiniFooter from "@/components/shared/mini-footer";
import { Navbar } from "@/components/shared/navbar";
import CategoryButton from "@/components/ui/category-button";
import Container from "@/components/ui/container";
import FeedButtons from "@/components/ui/feed-buttons";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types";

interface IProps {
  children: React.ReactNode;
}

const FeedLayout: React.FC<IProps> =  async({ children }) => {

  const categoryData = await getAllCategories();
  const categories = categoryData?.data as ICategory[];
  return (
    <>
      <Navbar />
      <section className="py-8">
        <Container>
          <div className="flex items-center space-x-4">
            <FeedButtons />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-6 items-start mt-8 w-full">
            {children}
            <div className="hidden lg:inline-block basis-[25%] space-y-6  sticky top-20">
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
        </Container>
      </section>
    </>
  );
};

export default FeedLayout;
