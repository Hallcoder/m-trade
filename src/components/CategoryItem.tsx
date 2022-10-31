import * as React from "react";
interface Props {
  categoryName: string;
  subCategories: string[];
}
const CategoryItem: React.FC<Props> = ({ categoryName, subCategories }) => {
  const listItemClass =
    "py-4 indent-2 text-gray-500 peer  font-semibold flex items-center justify-between";
  return (
    <div className="relative">
      <li className={listItemClass}>{categoryName}</li>
      <div className="w-full z-[1] shadow-md peer-hover:flex bg-white hidden absolute left-[100%] -top-1 mt-2 border-red-500 border h-[40vh]"></div>
    </div>
  );
};

export default CategoryItem;
