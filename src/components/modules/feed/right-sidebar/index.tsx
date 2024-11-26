import MiniFooter from "@/components/shared/mini-footer";
import CategoryButton from "@/components/ui/category-button";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types";

interface IProps {}

const RightSideBar = async ({}: IProps) => {
  const categoryData = await getAllCategories();
  const categories = categoryData?.data as ICategory[];
  return (
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
  );
};

export default RightSideBar;