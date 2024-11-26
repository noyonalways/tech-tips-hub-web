import React from "react";
import CategoryButton from "@/components/ui/category-button";
import { ICategory } from "@/types";

interface IProps {
  categories: ICategory[];
}

const Categories = ({ categories }: IProps) => {
  return (
    <div className="border border-default/50 p-6 rounded-xl space-y-2">
      <h2 className="font-semibold text-lg">Categories</h2>
      <div className="gap-2 flex flex-wrap">
        {categories.map((category) => (
          <CategoryButton key={category._id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
